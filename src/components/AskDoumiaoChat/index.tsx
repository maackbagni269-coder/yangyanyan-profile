"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { askDoumiao } from "@/data/askDoumiao";

const DIFY_API_KEY = "app-g4nZ1uFLcrBwo0zzHgIrlYy5";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type DifyStreamChunk = {
  event?: string;
  answer?: string;
  conversation_id?: string;
  message?: string;
};

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
  };
}

export function AskDoumiaoChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const sendMessage = async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || isLoading) return;

    setInput("");
    setIsLoading(true);
    setMessages((current) => [...current, createMessage("user", trimmed)]);

    try {
      const response = await fetch(askDoumiao.difyEndpoint ?? "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DIFY_API_KEY}`,
        },
        body: JSON.stringify({
          inputs: {},
          query: trimmed,
          response_mode: "streaming",
          user: "yangyanyan-profile-site",
          conversation_id: conversationId ?? undefined,
        }),
      });

      if (!response.ok || !response.body) {
        const errData = await response.json().catch(() => ({})) as DifyStreamChunk;
        throw new Error(errData.message || "豆苗暂时没有接上信号。");
      }

      // Read SSE stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let accumulatedAnswer = "";
      let finalConversationId: string | null = null;
      let assistantMsgId: string | null = null;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (!jsonStr || jsonStr === "[DONE]") continue;

          let chunk: DifyStreamChunk;
          try {
            chunk = JSON.parse(jsonStr) as DifyStreamChunk;
          } catch {
            continue;
          }

          // agent_message: text delta; message: non-agent chat delta
          if (
            (chunk.event === "agent_message" || chunk.event === "message") &&
            chunk.answer
          ) {
            accumulatedAnswer += chunk.answer;

            if (!assistantMsgId) {
              // First token — replace loading dots with real message
              assistantMsgId = `assistant-${Date.now()}-${Math.random().toString(16).slice(2)}`;
              setIsLoading(false);
              setMessages((current) => [
                ...current,
                { id: assistantMsgId!, role: "assistant", content: accumulatedAnswer },
              ]);
            } else {
              setMessages((current) =>
                current.map((msg) =>
                  msg.id === assistantMsgId
                    ? { ...msg, content: accumulatedAnswer }
                    : msg
                )
              );
            }
          }

          if (chunk.event === "message_end" && chunk.conversation_id) {
            finalConversationId = chunk.conversation_id;
          }

          if (chunk.event === "error") {
            throw new Error(chunk.message || "豆苗暂时没有接上信号。");
          }
        }
      }

      if (finalConversationId) {
        setConversationId(finalConversationId);
      }

      // Stream finished with no content
      if (!assistantMsgId) {
        setMessages((current) => [
          ...current,
          createMessage("assistant", "豆苗暂时没有生成回复。"),
        ]);
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "豆苗暂时没有接上信号，请稍后再试。";
      setMessages((current) => [...current, createMessage("assistant", message)]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  return (
    <article className="ask-doumiao-chat" aria-label="豆苗 AI 助手聊天界面">
      <div className="ask-chat__messages" ref={messagesRef}>
        {messages.map((message) => (
          <div
            className={`ask-message ask-message--${message.role}`}
            key={message.id}
          >
            {message.role === "assistant" ? (
              <img
                className="ask-message__avatar"
                src={askDoumiao.assistantAvatar}
                alt="豆苗"
                width={28}
                height={28}
              />
            ) : null}
            <p className="ask-message__bubble">{message.content}</p>
          </div>
        ))}

        {isLoading ? (
          <div className="ask-message ask-message--assistant">
            <img
              className="ask-message__avatar"
              src={askDoumiao.assistantAvatar}
              alt="豆苗"
              width={28}
              height={28}
            />
            <p className="ask-message__bubble ask-message__bubble--loading">
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </p>
          </div>
        ) : null}
      </div>

      {messages.length === 0 ? (
        <div className="ask-chat__quick-questions">
          {askDoumiao.quickQuestions.map((question) => (
            <button
              className="ask-chat__quick-button"
              key={question.prompt}
              onClick={() => void sendMessage(question.prompt)}
              type="button"
            >
              {question.prompt}
            </button>
          ))}
        </div>
      ) : null}

      <form className="ask-chat__input-bar" onSubmit={handleSubmit}>
        <textarea
          aria-label="向豆苗提问"
          disabled={isLoading}
          maxLength={1000}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="输入你想问豆苗的问题"
          value={input}
        />
        <button disabled={isLoading || !input.trim()} type="submit">
          发送
        </button>
      </form>
    </article>
  );
}
