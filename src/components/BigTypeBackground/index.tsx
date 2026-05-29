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
          {/* ── base gradient fills per cyberpunk state ─────────────────── */}
          <linearGradient id="profile-grad-neon-night" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(0, 245, 255, 0.88)" />
            <stop offset="100%" stopColor="rgba(180, 0, 255, 0.82)" />
          </linearGradient>
          <linearGradient id="profile-grad-digital-ghost" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(0, 255, 65, 0.88)" />
            <stop offset="100%" stopColor="rgba(255, 107, 0, 0.80)" />
          </linearGradient>
          <linearGradient id="profile-grad-gold-circuit" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255, 215, 0, 0.88)" />
            <stop offset="100%" stopColor="rgba(255, 140, 0, 0.82)" />
          </linearGradient>
          <linearGradient id="profile-grad-blood-city" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255, 17, 51, 0.88)" />
            <stop offset="100%" stopColor="rgba(255, 102, 0, 0.82)" />
          </linearGradient>
          <linearGradient id="profile-grad-ice-reactor" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(0, 229, 255, 0.88)" />
            <stop offset="100%" stopColor="rgba(200, 235, 255, 0.82)" />
          </linearGradient>
          <linearGradient id="profile-grad-toxic-venom" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(170, 255, 0, 0.88)" />
            <stop offset="100%" stopColor="rgba(0, 255, 204, 0.82)" />
          </linearGradient>
          <linearGradient id="profile-grad-abyss-crystal" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(204, 0, 255, 0.88)" />
            <stop offset="100%" stopColor="rgba(255, 0, 204, 0.82)" />
          </linearGradient>
          <linearGradient id="profile-grad-blade-runner" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255, 170, 0, 0.88)" />
            <stop offset="100%" stopColor="rgba(0, 170, 255, 0.82)" />
          </linearGradient>

          {/* ── pattern overlays per cyberpunk state ─────────── */}
          {/* neon-night: cyan + purple dots */}
          <pattern id="profile-pat-neon-night" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(0, 245, 255, 0.08)" />
            <circle cx="12" cy="12" r="4" fill="rgba(0, 245, 255, 0.55)" />
            <circle cx="36" cy="12" r="4" fill="rgba(180, 0, 255, 0.55)" />
            <circle cx="12" cy="36" r="4" fill="rgba(180, 0, 255, 0.55)" />
            <circle cx="36" cy="36" r="4" fill="rgba(0, 245, 255, 0.55)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(0, 245, 255, 0.40)" />
            <rect x="2"  y="22" width="6" height="6" fill="rgba(180, 0, 255, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(0, 245, 255, 0.35)" />
            <rect x="22" y="2"  width="6" height="6" fill="rgba(180, 0, 255, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(0, 245, 255, 0.35)" />
          </pattern>
          {/* digital-ghost: green + orange checkerboard */}
          <pattern id="profile-pat-digital-ghost" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="rgba(0, 0, 0, 0.70)" />
            <rect x="0"  y="0"  width="10" height="10" fill="rgba(0, 255, 65, 0.60)" />
            <rect x="10" y="10" width="10" height="10" fill="rgba(0, 255, 65, 0.60)" />
          </pattern>
          {/* gold-circuit: gold + orange dots */}
          <pattern id="profile-pat-gold-circuit" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(255, 215, 0, 0.08)" />
            <circle cx="12" cy="12" r="4" fill="rgba(255, 215, 0, 0.55)" />
            <circle cx="36" cy="12" r="4" fill="rgba(255, 140, 0, 0.55)" />
            <circle cx="12" cy="36" r="4" fill="rgba(255, 140, 0, 0.55)" />
            <circle cx="36" cy="36" r="4" fill="rgba(255, 215, 0, 0.55)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(255, 215, 0, 0.45)" />
            <rect x="2"  y="22" width="6" height="6" fill="rgba(255, 140, 0, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(255, 215, 0, 0.35)" />
            <rect x="22" y="2"  width="6" height="6" fill="rgba(255, 140, 0, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(255, 215, 0, 0.35)" />
          </pattern>
          {/* blood-city: red + orange dots */}
          <pattern id="profile-pat-blood-city" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(255, 17, 51, 0.08)" />
            <circle cx="12" cy="12" r="4" fill="rgba(255, 17, 51, 0.55)" />
            <circle cx="36" cy="12" r="4" fill="rgba(255, 102, 0, 0.55)" />
            <circle cx="12" cy="36" r="4" fill="rgba(255, 102, 0, 0.55)" />
            <circle cx="36" cy="36" r="4" fill="rgba(255, 17, 51, 0.55)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(255, 17, 51, 0.45)" />
            <rect x="2"  y="22" width="6" height="6" fill="rgba(255, 102, 0, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(255, 17, 51, 0.35)" />
            <rect x="22" y="2"  width="6" height="6" fill="rgba(255, 102, 0, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(255, 17, 51, 0.35)" />
          </pattern>
          {/* ice-reactor: cyan + white dots */}
          <pattern id="profile-pat-ice-reactor" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(0, 229, 255, 0.08)" />
            <circle cx="12" cy="12" r="4" fill="rgba(0, 229, 255, 0.55)" />
            <circle cx="36" cy="12" r="4" fill="rgba(200, 235, 255, 0.55)" />
            <circle cx="12" cy="36" r="4" fill="rgba(200, 235, 255, 0.55)" />
            <circle cx="36" cy="36" r="4" fill="rgba(0, 229, 255, 0.55)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(0, 229, 255, 0.45)" />
            <rect x="2"  y="22" width="6" height="6" fill="rgba(200, 235, 255, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(0, 229, 255, 0.35)" />
            <rect x="22" y="2"  width="6" height="6" fill="rgba(200, 235, 255, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(0, 229, 255, 0.35)" />
          </pattern>
          {/* toxic-venom: yellow-green + cyan dots */}
          <pattern id="profile-pat-toxic-venom" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(170, 255, 0, 0.08)" />
            <circle cx="12" cy="12" r="4" fill="rgba(170, 255, 0, 0.55)" />
            <circle cx="36" cy="12" r="4" fill="rgba(0, 255, 204, 0.55)" />
            <circle cx="12" cy="36" r="4" fill="rgba(0, 255, 204, 0.55)" />
            <circle cx="36" cy="36" r="4" fill="rgba(170, 255, 0, 0.55)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(170, 255, 0, 0.45)" />
            <rect x="2"  y="22" width="6" height="6" fill="rgba(0, 255, 204, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(170, 255, 0, 0.35)" />
            <rect x="22" y="2"  width="6" height="6" fill="rgba(0, 255, 204, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(170, 255, 0, 0.35)" />
          </pattern>
          {/* abyss-crystal: purple + pink dots */}
          <pattern id="profile-pat-abyss-crystal" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(204, 0, 255, 0.08)" />
            <circle cx="12" cy="12" r="4" fill="rgba(204, 0, 255, 0.55)" />
            <circle cx="36" cy="12" r="4" fill="rgba(255, 0, 204, 0.55)" />
            <circle cx="12" cy="36" r="4" fill="rgba(255, 0, 204, 0.55)" />
            <circle cx="36" cy="36" r="4" fill="rgba(204, 0, 255, 0.55)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(204, 0, 255, 0.45)" />
            <rect x="2"  y="22" width="6" height="6" fill="rgba(255, 0, 204, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(204, 0, 255, 0.35)" />
            <rect x="22" y="2"  width="6" height="6" fill="rgba(255, 0, 204, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(204, 0, 255, 0.35)" />
          </pattern>
          {/* blade-runner: amber + blue dots */}
          <pattern id="profile-pat-blade-runner" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="rgba(255, 170, 0, 0.08)" />
            <circle cx="12" cy="12" r="4" fill="rgba(255, 170, 0, 0.55)" />
            <circle cx="36" cy="12" r="4" fill="rgba(0, 170, 255, 0.55)" />
            <circle cx="12" cy="36" r="4" fill="rgba(0, 170, 255, 0.55)" />
            <circle cx="36" cy="36" r="4" fill="rgba(255, 170, 0, 0.55)" />
            <rect x="22" y="22" width="8" height="8" fill="rgba(255, 170, 0, 0.45)" />
            <rect x="2"  y="22" width="6" height="6" fill="rgba(0, 170, 255, 0.35)" />
            <rect x="40" y="22" width="6" height="6" fill="rgba(255, 170, 0, 0.35)" />
            <rect x="22" y="2"  width="6" height="6" fill="rgba(0, 170, 255, 0.35)" />
            <rect x="22" y="40" width="6" height="6" fill="rgba(255, 170, 0, 0.35)" />
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
          fill="url(#profile-pat-neon-night)"
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
