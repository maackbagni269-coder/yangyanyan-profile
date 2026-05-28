export type ArticleEntry = {
  title: string;
  platform: string;
  summary: string;
  url?: string;
  actionLabel?: string;
  qrcodeSrc?: string;
  clickable: boolean;
};

export const articleEntries: ArticleEntry[] = [
  {
    title: "人人都是产品经理",
    platform: "人人都是产品经理",
    summary: "查看我在人人都是产品经理发布的文章与产品思考",
    url: "https://www.woshipm.com/u/1680268",
    actionLabel: "查看主页 ↗",
    clickable: true,
  },
  {
    title: "微信公众号",
    platform: "微信公众号",
    summary: "扫描二维码关注公众号，获取最新文章更新",
    qrcodeSrc: "/assets/qrcode-wechat.jpg",
    clickable: false,
  },
];
