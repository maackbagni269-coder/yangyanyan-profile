import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "下载 App · 杨艳艳 Portfolio",
  description: "下载杨艳艳 Portfolio Android App，安装后离线可用。",
};

export default function DownloadPage() {
  return (
    <main className="download-page">
      <div className="download-card">
        {/* App icon */}
        <div className="download-icon">
          <img src="/assets/doumiao/doumiao-logo.png" alt="杨艳艳 Portfolio" />
        </div>

        {/* App info */}
        <h1 className="download-title">杨艳艳 Portfolio</h1>
        <p className="download-subtitle">杨艳艳的个人作品集 · Android App</p>

        {/* Download button */}
        <a
          href="/download/yangyanyan-portfolio.apk"
          download="yangyanyan-portfolio.apk"
          className="download-btn"
        >
          <span className="download-btn__icon">↓</span>
          下载 APK（8.4 MB）
        </a>

        {/* Install guide */}
        <div className="download-guide">
          <p className="download-guide__title">安装步骤</p>
          <ol className="download-guide__steps">
            <li>点击上方按钮下载 APK 文件</li>
            <li>手机弹出提示 → 点击"仍然下载"</li>
            <li>下载完成后点击文件 → 安装</li>
            <li>
              若提示"未知来源"→ 前往<strong>设置 → 安全</strong>，
              开启"允许安装未知来源应用"
            </li>
          </ol>
          <p className="download-guide__note">
            仅支持 Android 手机 · iOS 暂不支持
          </p>
        </div>

        {/* Back link */}
        <a href="/" className="download-back">← 返回主页</a>
      </div>
    </main>
  );
}
