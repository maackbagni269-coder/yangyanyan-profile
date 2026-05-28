export type ShowcaseItem = {
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

export const showcase: ShowcaseItem[] = [
  {
    title: "AI 情感陪伴竞品分析报告",
    description: "最终形成的竞品分析报告，可作为产品分析和评测能力证据",
    tags: ["报告", "竞品分析"],
    links: [
      {
        label: "查看报告 ↗",
        href: "/assets/files/竞品分析报告.html",
        external: true,
      },
    ],
  },
  {
    title: "竞品评测总表",
    description: "汇总不同产品的评测结果、维度和评分情况",
    tags: ["Excel", "评测表"],
    links: [
      {
        label: "下载表格",
        href: "/assets/files/竞品评测总表.xlsx",
        download: true,
      },
    ],
  },
  {
    title: "评测员评分表",
    description: "展示具体评分执行过程和评测数据结构",
    tags: ["评分", "数据表"],
    links: [
      {
        label: "下载表格",
        href: "/assets/files/评测员评分表.xlsx",
        download: true,
      },
    ],
  },
  {
    title: "优质数据标注规则文档",
    description: "可作为数据构建、规则设计和标注规范能力的成果证明",
    tags: ["标注规则", "数据质量"],
    links: [
      {
        label: "下载文档",
        href: "/assets/files/标注规则文档.docx",
        download: true,
      },
    ],
  },
  {
    title: "个人网站作品",
    description: "当前正在搭建的个人 AI 数据平台，是 Vibe Coding 和项目整合的最终作品",
    tags: ["网站", "作品集"],
    links: [
      {
        label: "部署后更新链接",
        disabled: true,
      },
    ],
  },
];
