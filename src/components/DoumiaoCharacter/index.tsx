"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

// ── constants ────────────────────────────────────────────────────────────────
const STATES = ["normal", "glow", "colorful", "mono", "pattern"] as const;
type DoumiaoState = (typeof STATES)[number];
const CYCLE_MS = 3200;

function setHtmlState(state: DoumiaoState) {
  document.documentElement.dataset.doumiaoState = state;
}

// ── component ─────────────────────────────────────────────────────────────────
export function DoumiaoCharacter() {
  // DOM refs
  const skinRef   = useRef<HTMLDivElement | null>(null);

  // mutable state (no re-renders needed)
  const idxRef        = useRef(0);
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  // ── main effect ──────────────────────────────────────────────────────────────
  useEffect(() => {
    setHtmlState(STATES[0]);
    schedule();

    // reduced-motion
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mql.matches;
    const onMql = () => { reducedMotion.current = mql.matches; };
    mql.addEventListener("change", onMql);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      mql.removeEventListener("change", onMql);
    };
  }, [schedule]);

  // ── render ────────────────────────────────────────────────────────────────────
  return (
    <section
      className="character-stage"
      aria-label="豆苗角色"
    >
      {/*
        hit-area wraps the interactive zone.
        float       → CSS-driven vertical float (translateY).
        tilt        → JS-driven 3-D rotation (rotateX/Y/Z).
        shadow      → blob shadow behind the character.
        mask-stack  → flat container: body-image + color-overlay + sheen,
                      all at the same Z — NO independent translateZ on any child.
      */}
      <Link
        href="/ask-doumiao"
        className="character-hit-area"
        data-cursor="hover"
        aria-label="前往问豆苗页面"
      >
        <div className="character-float">
          <div className="character-tilt">
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
      </Link>
    </section>
  );
}
