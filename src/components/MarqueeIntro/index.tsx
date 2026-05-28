const intro = "这里住着豆苗，也住着我的项目、文章、灵感和一点点正在变好的自己";

export function MarqueeIntro() {
  return (
    <div className="marquee-intro" aria-label="顶部滚动介绍">
      <div className="marquee-intro__viewport">
        <div className="marquee-intro__track">
          <p>{intro}</p>
          <p aria-hidden="true">{intro}</p>
        </div>
      </div>
    </div>
  );
}
