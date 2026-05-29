export function BigTypeBackground() {
  return (
    <div className="big-type-background" aria-hidden="true">
      <svg
        className="big-type-svg"
        viewBox="0 0 1280 320"
        preserveAspectRatio="xMidYMid meet"
        role="img"
      >
        <defs>
          {/* ── base gradient fills per state ─────────────────── */}
          <linearGradient id="profile-grad-normal" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(188, 168, 132, 0.85)" />
            <stop offset="100%" stopColor="rgba(168, 148, 108, 0.80)" />
          </linearGradient>
          <linearGradient id="profile-grad-glow" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(33, 137, 214, 0.82)" />
            <stop offset="100%" stopColor="rgba(66, 165, 245, 0.75)" />
          </linearGradient>
          <linearGradient id="profile-grad-colorful" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(247, 57, 57, 0.82)" />
            <stop offset="50%"  stopColor="rgba(255, 152, 0, 0.78)" />
            <stop offset="100%" stopColor="rgba(255, 200, 46, 0.75)" />
          </linearGradient>
          <linearGradient id="profile-grad-mono" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(8, 8, 8, 0.92)" />
            <stop offset="52%"  stopColor="rgba(10, 35, 18, 0.88)" />
            <stop offset="100%" stopColor="rgba(57, 211, 83, 0.84)" />
          </linearGradient>
          <linearGradient id="profile-grad-pattern" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(86, 136, 78, 0.82)" />
            <stop offset="100%" stopColor="rgba(120, 172, 100, 0.75)" />
          </linearGradient>

          {/* ── pattern overlays per state — same hue as character ─────────── */}
          {/* normal: warm khaki blocks */}
          <pattern id="profile-pat-normal" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(188, 168, 132, 0.15)" />
            <circle cx="12" cy="12" r="4" fill="rgba(188, 168, 132, 0.50)" />
            <circle cx="36" cy="12" r="4" fill="rgba(188, 168, 132, 0.50)" />
            <circle cx="12" cy="36" r="4" fill="rgba(188, 168, 132, 0.50)" />
            <circle cx="36" cy="36" r="4" fill="rgba(188, 168, 132, 0.50)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(168, 148, 108, 0.45)" />
            <rect x="2" y="22" width="6" height="6" fill="rgba(168, 148, 108, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(168, 148, 108, 0.35)" />
            <rect x="22" y="2" width="6" height="6" fill="rgba(168, 148, 108, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(168, 148, 108, 0.35)" />
          </pattern>
          {/* glow: blue blocks */}
          <pattern id="profile-pat-glow" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(33, 137, 214, 0.15)" />
            <circle cx="12" cy="12" r="4" fill="rgba(33, 137, 214, 0.50)" />
            <circle cx="36" cy="12" r="4" fill="rgba(33, 137, 214, 0.50)" />
            <circle cx="12" cy="36" r="4" fill="rgba(33, 137, 214, 0.50)" />
            <circle cx="36" cy="36" r="4" fill="rgba(33, 137, 214, 0.50)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(66, 165, 245, 0.45)" />
            <rect x="2" y="22" width="6" height="6" fill="rgba(66, 165, 245, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(66, 165, 245, 0.35)" />
            <rect x="22" y="2" width="6" height="6" fill="rgba(66, 165, 245, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(66, 165, 245, 0.35)" />
          </pattern>
          {/* colorful: red-orange-yellow blocks */}
          <pattern id="profile-pat-colorful" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(247, 57, 57, 0.15)" />
            <circle cx="12" cy="12" r="4" fill="rgba(247, 57, 57, 0.50)" />
            <circle cx="36" cy="12" r="4" fill="rgba(255, 152, 0, 0.50)" />
            <circle cx="12" cy="36" r="4" fill="rgba(255, 200, 46, 0.50)" />
            <circle cx="36" cy="36" r="4" fill="rgba(247, 57, 57, 0.50)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(255, 152, 0, 0.45)" />
            <rect x="2" y="22" width="6" height="6" fill="rgba(247, 57, 57, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(255, 200, 46, 0.35)" />
            <rect x="22" y="2" width="6" height="6" fill="rgba(255, 152, 0, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(247, 57, 57, 0.35)" />
          </pattern>
          {/* mono: black-green checkerboard clash */}
          <pattern id="profile-pat-mono" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="rgba(8, 8, 8, 0.68)" />
            <rect x="0"  y="0"  width="10" height="10" fill="rgba(57, 211, 83, 0.62)" />
            <rect x="10" y="10" width="10" height="10" fill="rgba(57, 211, 83, 0.62)" />
          </pattern>
          {/* pattern-state: green blocks */}
          <pattern id="profile-pat-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(86, 136, 78, 0.15)" />
            <circle cx="12" cy="12" r="4" fill="rgba(86, 136, 78, 0.50)" />
            <circle cx="36" cy="12" r="4" fill="rgba(86, 136, 78, 0.50)" />
            <circle cx="12" cy="36" r="4" fill="rgba(86, 136, 78, 0.50)" />
            <circle cx="36" cy="36" r="4" fill="rgba(86, 136, 78, 0.50)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(120, 172, 100, 0.45)" />
            <rect x="2" y="22" width="6" height="6" fill="rgba(120, 172, 100, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(120, 172, 100, 0.35)" />
            <rect x="22" y="2" width="6" height="6" fill="rgba(120, 172, 100, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(120, 172, 100, 0.35)" />
          </pattern>
        </defs>

        {/* base colour layer */}
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
        {/* pattern overlay layer */}
        <text
          className="big-type-text big-type-text--pattern"
          x="640"
          y="140"
          fontSize="160"
          letterSpacing="-5"
          textAnchor="middle"
          dominantBaseline="central"
          fill="url(#profile-pat-normal)"
        >
          PROFILE
        </text>

        {/* calligraphy motto — below the P and R letters, within P-R x range */}
        <text
          className="big-type-motto"
          x="75"
          y="272"
          textAnchor="start"
          dominantBaseline="auto"
        >
          你可以成为任何样子
        </text>
      </svg>
    </div>
  );
}
