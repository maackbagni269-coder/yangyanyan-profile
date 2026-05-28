"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { askDoumiao } from "@/data/askDoumiao";

const DIFY_API_KEY = "app-g4nZ1uFLcrBwo0zzHgIrlYy5";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type DifyBlockingResponse = {
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
          response_mode: "blocking",
          user: "yangyanyan-profile-site",
          conversation_id: conversationId ?? undefined,
        }),
      });

      const data = (await response.json()) as DifyBlockingResponse;

      if (!response.ok) {
        throw new Error(data.message || "豆苗暂时没有接上信号。");
      }

      if (data.conversation_id) {
        setConversationId(data.conversation_id);
      }

      setMessages((current) => [
        ...current,
        createMessage("assistant", data.answer || "豆苗暂时没有生成回复。"),
      ]);
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
