# 杨艳艳 Portfolio

这是一个个人求职网站作业项目骨架。项目用于练习固定式 viewport 首页、豆苗角色系统、项目资料展示、Dify 助手入口、静态部署和后续 Android APK 打包流程。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static Export 静态导出
- 后续计划接入 Capacitor Android

## 本地运行

```bash
npm install
npm run dev
```

开发地址默认是：

```text
http://localhost:3000
```

## 静态导出

```bash
npm run build
```

`next.config.js` 已固定配置：

- `output: "export"`
- `trailingSlash: true`
- `images: { unoptimized: true }`

`next build` 后会生成 `out` 文件夹。`trailingSlash: true` 会让静态路由更适合目录式托管，例如：

```text
out/
  index.html
  projects/
    index.html
```

因为本项目是 static export，不允许使用：

- API Routes
- 服务端数据库
- SSR
- 服务端动态功能
- 必须依赖 Node.js 服务器运行的功能

## 部署策略

项目不绑定死某一个部署平台。核心交付物是 `out` 文件夹。

`out` 文件夹可用于：

- 阿里云 OSS 静态网站托管
- Cloudflare Pages Direct Upload
- GitHub Pages
- Cloudflare Pages Git 集成
- Vercel Git 集成
- Capacitor Android web 资源

当前推荐部署主线：

- 阿里云 OSS 静态网站托管

当前备用部署：

- Cloudflare Pages Direct Upload

未来找回 GitHub 后可切换：

- GitHub Pages
- Cloudflare Pages Git 集成
- Vercel Git 集成

## 域名规则

目标域名：

```text
https://yangyanyan.com
```

硬性要求：

- 域名必须在阿里云购买。
- 域名必须是 `.com`。
- 首选域名是 `yangyanyan.com`。
- 如果 `yangyanyan.com` 不可注册，只能选择其他 `.com` 备用域名。
- 阿里云域名需要完成实名认证 / 信息模板审核。
- 如果使用阿里云中国大陆地域服务，按阿里云控制台提示处理 ICP 备案相关要求。

备用域名建议：

- `yanyanyang.com`
- `yangyanyanportfolio.com`
- `yangyanyanprofile.com`
- `yangyanyanworks.com`
- `helloyangyanyan.com`

HTTPS 验收目标：

```text
https://yangyanyan.com
```

## APK 打包说明

后续会添加 `capacitor.config.ts` 和 Android 工程。

第一版建议：

```text
webDir: "out"
```

Capacitor 会读取静态导出的网页资源打包 Android APK。外部链接、Dify、飞书文档等内容需要手机网络访问。

## 静态素材与数据边界

静态素材统一放在：

```text
public/assets/
```

豆苗分层素材目录固定为：

```text
public/assets/doumiao/
  doumiao-body.png
  doumiao-outline.svg
  doumiao-pattern-mask.svg
  doumiao-blush.png
  doumiao-shadow.png
```

后续组件引用豆苗素材时，使用 URL 路径：

```text
/assets/doumiao/doumiao-body.png
```

资源管理规则：

- `public/assets/` 保存真实静态资源文件，例如豆苗图片、二维码、文档预览图、文章封面图、Excel、PDF、Markdown 等。
- `src/data/` 只保存外链、标题、摘要、文件路径、标签等结构化数据。
- 不直接使用白底 JPG 作为豆苗角色素材。
- 这样做是为了兼容 Next.js Static Export、阿里云 OSS、Cloudflare Pages、GitHub Pages 和 Capacitor APK。

## 路由占位

- `/`
- `/ask-doumiao/`
- `/projects/`
- `/showcase/`
- `/articles/`
- `/contact/`

所有路由都是固定静态路由，不使用服务端动态路由。

## 组件职责

| 组件名 | 作用 | 使用 token | 当前阶段是否实现交互 | 后续阶段 |
| --- | --- | --- | --- | --- |
| `AppShell` | 组合首页固定式 viewport 图层 | layout / z-index | 否 | 接入首页状态和视觉动效 |
| `SubPageShell` | 组合子页面公共结构 | layout / border / z-index | 否 | 接入真实内容网格 |
| `FixedFrame` | 四周固定视觉边框 | border / z-index | 否，且 pointer-events none | 细化 light/dark 边框 |
| `Header` | 顶部框架占位 | layout / border | 否 | 实现完整网格 Header |
| `DoumiaoLogoBlock` | 左上角豆苗头像区域 | logo size / border | 否 | 替换为分层兔子头像 |
| `MarqueeIntro` | 顶部滚动介绍 | typography / motion | 否 | 实现 marquee 滚动 |
| `JobIntentLinks` | 顶部中间岗位区 | border / typography | 仅 hover 基础样式 | 加强反色反馈 |
| `NavGrid` | 右侧 5 块导航网格 | border / typography / motion | 仅链接跳转 | 完成 3+2 网格动效 |
| `MobileMenu` | 移动端菜单占位 | z-index / border | 否 | 实现展开收起 |
| `BigTypeBackground` | 首页 `PROFILE` 大字层 | big type / z-index | 否 | 加入纹理和状态切换 |
| `FloatingMotifs` | 背景漂浮元素层 | motion / z-index | 否 | 加入小图标和鼠标响应 |
| `DoumiaoCharacter` | 中央豆苗角色系统占位 | character / z-index | 否 | 接入分层角色素材 |
| `InteractionHint` | 交互提示条 | accent / border | 否 | 点击豆苗状态提示 |
| `HeroQuote` | 底部两行中文文案 | typography / layout | 否 | 调整最终底部排版 |
| `CustomCursor` | 桌面自定义鼠标占位 | cursor z-index | 否 | 实现跟随和 hover 状态 |
| `LoadingOverlay` | 入场层占位 | loading z-index | 否 | 实现 Loading / Mask |

## 数据文件

静态数据放在 `src/data` 中。外部文章主页、飞书文档、Excel、PDF、Markdown、图片、Dify 或 AI 助手链接都通过静态 data 文件配置，不依赖数据库或后端 API。真实文件资源放在 `public/assets/` 中，由 data 文件记录访问路径。
