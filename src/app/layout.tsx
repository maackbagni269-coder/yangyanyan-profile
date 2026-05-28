import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { FixedFrame } from "@/components/FixedFrame";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "杨艳艳 Portfolio",
  description: "杨艳艳的个人求职网站作业骨架：AI 训练师、AI 数据构建、项目资料与作品展示。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="light">
      <body>
        {children}
        <FixedFrame />
        <CustomCursor />
        <LoadingOverlay />
      </body>
    </html>
  );
}
