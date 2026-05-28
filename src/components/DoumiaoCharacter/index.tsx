"use client";

import { useCallback, useEffect, useRef } from "react";

// ── constants ────────────────────────────────────────────────────────────────
const STATES = ["normal", "glow", "colorful", "mono", "pattern"] as const;
type DoumiaoState = (typeof STATES)[number];
const CYCLE_MS = 3200;
const LERP = 0.08;

function setHtmlState(state: DoumiaoState) {
  document.documentElement.dataset.doumiaoState = state;
}

// ── component ─────────────────────────────────────────────────────────────────
export function DoumiaoCharacter() {
  // DOM refs
  const stageRef  = useRef<HTMLElement | null>(null);
  const tiltRef   = useRef<HTMLDivElement | null>(null);
  const skinRef   = useRef<HTMLDivElement | null>(null);

  // mutable state (no re-renders needed)
  const idxRef        = useRef(0);
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef        = useRef<number>(0);
  const targetX       = useRef(0);
  const targetY       = useRef(0);
  const curX          = useRef(0);
  const curY          = useRef(0);
  const isPopping     = useRef(false); // click-pop in progress
  const reducedMotion = useRef(false);

  // ── animation helpers ───────────────────────────────────────────────────────
  const removeSkinClass = useCallback(() => {
    isPopping.current = false;
    skinRef.current?.classList.remove("is-auto-pulsing", "is-click-popping");
  }, []);

  const pulse = useCallback((kind: "auto" | "click") => {
    const skin = skinRef.current;
    if (!skin || reducedMotion.current) return;
    if (kind === "auto" && isPopping.current) return; // click takes priority

    if (kind === "click") isPopping.current = true;
    const cls   = kind === "click" ? "is-click-popping" : "is-auto-pulsing";
    const other = kind === "click" ? "is-auto-pulsing"  : "is-click-popping";
    skin.classList.remove(cls, other);
    void skin.offsetWidth; // restart animation
    skin.classList.add(cls);
  }, []);

  // ── state advance ────────────────────────────────────────────────────────────
  const advance = useCallback(
    (source: "auto" | "click") => {
      idxRef.current = (idxRef.current + 1) % STATES.length;
      setHtmlState(STATES[idxRef.current]);

      const root = document.documentElement;
      root.dataset.doumiaoMotion = source;
      setTimeout(() => { delete root.dataset.doumiaoMotion; }, 700);

      pulse(source);
    },
    [pulse],
  );

  // ── auto-cycle ───────────────────────────────────────────────────────────────
  const schedule = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      advance("auto");
      schedule();
    }, CYCLE_MS);
  }, [advance]);

  // ── click ────────────────────────────────────────────────────────────────────
  const handleClick = useCallback(() => {
    advance("click");
    schedule(); // reset timer
  }, [advance, schedule]);

  // ── main effect ──────────────────────────────────────────────────────────────
  useEffect(() => {
    setHtmlState(STATES[0]);
    schedule();

    // reduced-motion
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mql.matches;
    const onMql = () => { reducedMotion.current = mql.matches; };
    mql.addEventListener("change", onMql);

    // 3-D tilt (desktop / fine pointer only)
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    const onPointerMove = (e: PointerEvent) => {
      if (reducedMotion.current) return;
      const stage = stageRef.current;
      if (!stage) return;
      const r  = stage.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
      const ny = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
      targetY.current = nx * 12;
      targetX.current = -ny * 10;
    };

    const onPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) { targetX.current = 0; targetY.current = 0; }
    };

    if (!isMobile) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerout",  onPointerOut);
    }

    // RAF lerp
    const tick = () => {
      if (tiltRef.current) {
        if (!reducedMotion.current) {
          curX.current += (targetX.current - curX.current) * LERP;
          curY.current += (targetY.current - curY.current) * LERP;
          const rz = (curY.current * 0.125).toFixed(2);
          tiltRef.current.style.transform =
            `rotateX(${curX.current.toFixed(2)}deg) rotateY(${curY.current.toFixed(2)}deg) rotateZ(${rz}deg)`;
        } else {
          tiltRef.current.style.transform = "";
          curX.current = 0; curY.current = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout",  onPointerOut);
      mql.removeEventListener("change", onMql);
    };
  }, [schedule]);

  const onStageLeave = useCallback(() => {
    targetX.current = 0;
    targetY.current = 0;
  }, []);

  // ── render ────────────────────────────────────────────────────────────────────
  return (
    <section
      ref={stageRef}
      className="character-stage"
      aria-label="豆苗角色"
      onMouseLeave={onStageLeave}
    >
      {/*
        hit-area wraps the interactive zone.
        float       → CSS-driven vertical float (translateY).
        tilt        → JS-driven 3-D rotation (rotateX/Y/Z).
        shadow      → blob shadow behind the character.
        mask-stack  → flat container: body-image + color-overlay + sheen,
                      all at the same Z — NO independent translateZ on any child.
      */}
      <div
        className="character-hit-area"
        role="button"
        tabIndex={0}
        data-cursor="hover"
        aria-label="点击豆苗切换状态"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleClick(); }
        }}
      >
        <div className="character-float">
          <div ref={tiltRef} className="character-tilt">
            <div className="character-shadow" aria-hidden="true" />
            {/*
              character-mask-stack: ALL visual layers on the SAME Z plane.
              The tilt wrapper (above) handles 3D rotation — no children
              get independent translateZ, so they never separate.
            */}
            <div
              ref={skinRef}
              className="character-mask-stack"
              aria-hidden="true"
              onAnimationEnd={removeSkinClass}
            >
              {/* 1. main PNG — drives element height */}
              <img
                className="character-body-image"
                src="/assets/doumiao/doumiao-body.png"
                alt="豆苗"
                draggable={false}
              />
              {/* 2. state-driven colour tint, masked to character silhouette */}
              <div className="character-color-overlay" aria-hidden="true" />
              {/* 3. top-left highlight sheen */}
              <div className="character-sheen" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
