export function BigTypeBackground() {
  return (
    <div className="big-type-background" aria-hidden="true">
      <svg
        className="big-type-svg"
        viewBox="0 0 1280 280"
        preserveAspectRatio="xMidYMid meet"
        role="img"
      >
        <defs>
          {/* ── state-based gradient fills for PROFILE text ─────────────────── */}
          <linearGradient id="profile-grad-normal" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(70,  70,  70,  0.22)" />
            <stop offset="100%" stopColor="rgba(155, 143, 115, 0.16)" />
          </linearGradient>
          <linearGradient id="profile-grad-glow" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(33,  137, 214, 0.28)" />
            <stop offset="100%" stopColor="rgba(22,  190, 175, 0.20)" />
          </linearGradient>
          <linearGradient id="profile-grad-colorful" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255, 115, 38,  0.28)" />
            <stop offset="50%"  stopColor="rgba(247, 57,  57,  0.24)" />
            <stop offset="100%" stopColor="rgba(255, 200, 46,  0.22)" />
          </linearGradient>
          <linearGradient id="profile-grad-mono" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(28,  28,  28,  0.26)" />
            <stop offset="100%" stopColor="rgba(80,  80,  80,  0.18)" />
          </linearGradient>
          <linearGradient id="profile-grad-pattern" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(78,  138, 78,  0.28)" />
            <stop offset="100%" stopColor="rgba(138, 188, 98,  0.20)" />
          </linearGradient>
          {/* ── grid pattern overlay (pattern state only) ───────────────────── */}
          <pattern id="profile-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
            <rect width="64" height="64" fill="rgba(88, 128, 82, 0.18)" />
            <path d="M0 16H64M0 48H64M16 0V64M48 0V64" stroke="rgba(27, 68, 35, 0.28)" strokeWidth="2" />
            <circle cx="16" cy="16" r="5" fill="rgba(237, 246, 222, 0.22)" />
            <circle cx="48" cy="48" r="5" fill="rgba(237, 246, 222, 0.22)" />
          </pattern>
        </defs>

        <text
          className="big-type-text"
          x="640"
          y="140"
          fontSize="160"
          letterSpacing="-5"
          textAnchor="middle"
          dominantBaseline="central"
        >
          PROFILE
        </text>
        <text
          className="big-type-text big-type-text--pattern"
          x="640"
          y="140"
          fontSize="160"
          letterSpacing="-5"
          textAnchor="middle"
          dominantBaseline="central"
          fill="url(#profile-pattern)"
        >
          PROFILE
        </text>
      </svg>
    </div>
  );
}
