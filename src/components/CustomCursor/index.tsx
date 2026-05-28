"use client";

import { useEffect, useRef } from "react";

// Lerp factor for ring — lower = more lag, higher = snappier
const LERP = 0.13;

function isDesktop() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    window.matchMedia("(hover: hover)").matches
  );
}

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    const wrap = wrapRef.current;
    if (!dot || !ring || !wrap || !isDesktop()) return;

    document.body.classList.add("has-custom-cursor");

    // Current mouse position (dot — instant)
    let mx = -200, my = -200;
    // Lerped ring position (ring — lagged)
    let rx = -200, ry = -200;
    let raf = 0;
    let reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── RAF loop ────────────────────────────────────────────────────────────
    const tick = () => {
      const k = reduced ? 1 : LERP;
      rx += (mx - rx) * k;
      ry += (my - ry) * k;
      // Direct DOM manipulation — no React re-renders
      dot.style.transform  = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // ── Event handlers ──────────────────────────────────────────────────────
    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!wrap.classList.contains("is-visible")) {
        rx = mx; ry = my;           // snap ring to cursor on first appear
        wrap.classList.add("is-visible");
      }
    };

    const onOver = (e: PointerEvent) => {
      if (!(e.target instanceof Element)) return;
      ring.classList.toggle(
        "is-hovered",
        Boolean(e.target.closest("a, button, [data-cursor='hover']"))
      );
    };

    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) {
        wrap.classList.remove("is-visible");
        ring.classList.remove("is-hovered", "is-pressed");
      }
    };

    const onDown = () => ring.classList.add("is-pressed");
    const onUp   = () => ring.classList.remove("is-pressed");

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMql = () => { reduced = mql.matches; };
    mql.addEventListener("change", onMql);

    window.addEventListener("pointermove", onMove,  { passive: true });
    window.addEventListener("pointerdown", onDown,  { passive: true });
    window.addEventListener("pointerup",   onUp,    { passive: true });
    window.addEventListener("pointerout",  onOut);
    document.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup",   onUp);
      window.removeEventListener("pointerout",  onOut);
      document.removeEventListener("pointerover", onOver);
      mql.removeEventListener("change", onMql);
    };
  }, []);

  return (
    <div ref={wrapRef} className="cursor-wrap" aria-hidden="true">
      {/* Precise dot — sits exactly at pointer tip */}
      <div ref={dotRef}  className="cursor-dot"  />
      {/* Lagged ring — trails behind with spring feel */}
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
