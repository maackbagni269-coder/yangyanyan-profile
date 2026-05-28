export type SocialLink = {
  label: string;
  url: string;
  type: "article-homepage" | "feishu" | "wechat" | "email" | "external";
};

export type ContactProfile = {
  email?: string;
  wechatQr?: string;
  jobIntent: string[];
  resumeUrl?: string;
  socialLinks: SocialLink[];
  shortBio: string;
};

export const contact: ContactProfile = {
  email: "2187877910@qq.com",
  wechatQr: "/assets/qrcode-wechat.jpg",
  jobIntent: ["AI 训练师", "AI 数据构建"],
  socialLinks: [
    {
      label: "邮箱",
      url: "mailto:2187877910@qq.com",
      type: "email",
    },
    {
      label: "微信",
      url: "/assets/qrcode-wechat.jpg",
      type: "wechat",
    },
  ],
  shortBio: "可沟通面试邀约、项目合作与 AI 数据岗位相关问题。",
};
