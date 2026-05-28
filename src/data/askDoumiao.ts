export type QuickQuestion = {
  label: string;
  prompt: string;
};

export type AskDoumiaoConfig = {
  assistantName: string;
  assistantAvatar?: string;
  difyUrl?: string;
  difyEndpoint?: string;
  embedUrl?: string;
  quickQuestions: QuickQuestion[];
  description: string;
  status: "draft" | "testing" | "ready";
};

export const askDoumiao: AskDoumiaoConfig = {
  assistantName: "豆苗 Doumiao",
  assistantAvatar: "/assets/doumiao/doumiao-logo.png",
  difyUrl: "https://udify.app/chat/nxCrXsF8kmGOrlxj",
  difyEndpoint: "https://api.dify.ai/v1/chat-messages",
  quickQuestions: [
    {
      label: "项目经历",
      prompt: "介绍一下杨艳艳的项目经历",
    },
    {
      label: "岗位匹配",
      prompt: "她适合什么类型的 AI 数据岗位？",
    },
    {
      label: "数据构建",
      prompt: "她做过哪些 AI 数据构建相关练习？",
    },
    {
      label: "Dify Agent",
      prompt: "她的 Dify Agent 项目是怎么做的？",
    },
    {
      label: "Vibe Coding",
      prompt: "她如何理解 Vibe Coding 的流程？",
    },
  ],
  description:
    "你可以问豆苗关于我的项目经历、AI 数据构建实践、Dify Agent 搭建、Vibe Coding 建站过程的问题。",
  status: "ready",
};
