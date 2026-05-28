export type ProjectDocument = {
  title: string;
  description: string;
  tags: string[];
  links: {
    label: string;
    href?: string;
    external?: boolean;
    download?: boolean;
    disabled?: boolean;
  }[];
};

export const projects: ProjectDocument[] = [
  {
    title: "Dify Agent 求职助手",
    description: "用 Dify 搭建一个能回答个人经历、项目经验和求职方向的 AI 助手",
    tags: ["Dify", "RAG", "Agent"],
    links: [
      {
        label: "查看 SOP ↗",
        href: "https://lcn89rw4t3zu.feishu.cn/wiki/DQwbw2XkZidhyRkCyNQchGAmn5d",
        external: true,
      },
      {
        label: "体验助手 ↗",
        href: "https://udify.app/chat/nxCrXsF8kmGOrlxj",
        external: true,
      },
    ],
  },
  {
    title: "AI 情感陪伴竞品评测分析",
    description: "拆解 AI 情感陪伴产品，从功能、体验、内容质量等维度做竞品评测",
    tags: ["竞品分析", "评测", "AI 产品"],
    links: [
      {
        label: "查看 SOP ↗",
        href: "https://lcn89rw4t3zu.feishu.cn/wiki/MPj5wDCVjig4BUky1FAcsSw5n2c",
        external: true,
      },
    ],
  },
  {
    title: "AI 数据标注规则设计",
    description: "整理数据标注规则、评分标准和优质数据判断逻辑",
    tags: ["数据标注", "规则设计"],
    links: [
      {
        label: "下载文档",
        href: "/assets/files/标注规则文档.docx",
        download: true,
      },
    ],
  },
  {
    title: "Bad Case 处理与流程管理 SOP",
    description: "展示标注中期如何发现问题、归因、修正并回流到规则",
    tags: ["Bad Case", "SOP", "质检"],
    links: [
      {
        label: "查看 SOP ↗",
        href: "https://lcn89rw4t3zu.feishu.cn/wiki/UIx3wfJcUiOaGzk4h74cGCXPnQe",
        external: true,
      },
    ],
  },
  {
    title: "Vibe Coding 建站实践",
    description: "记录个人网站从需求拆解、设计、开发、调试到部署的全过程",
    tags: ["Vibe Coding", "建站", "部署"],
    links: [
      {
        label: "复盘文档即将上线",
        disabled: true,
      },
    ],
  },
];
