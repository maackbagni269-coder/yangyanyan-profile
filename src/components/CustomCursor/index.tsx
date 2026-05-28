"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

function supportsDesktopCursor() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(pointer: coarse)").matches
  );
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const hoverCapability = window.matchMedia("(hover: hover)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncCapability = () => {
      const active = supportsDesktopCursor();
      setEnabled(active);
      setReducedMotion(reduceMotion.matches);

      document.body.classList.toggle("has-custom-cursor", active);
      document.body.classList.toggle("has-reduced-motion", reduceMotion.matches);

      if (!active) {
        setVisible(false);
        setHovered(false);
        setPressed(false);
      }
    };

    syncCapability();

    const handlePointerMove = (event: PointerEvent) => {
      if (!supportsDesktopCursor()) {
        return;
      }

      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      setHovered(Boolean(target.closest("a, button, [data-cursor='hover']")));
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (!target.closest("a, button, [data-cursor='hover']")) {
        return;
      }

      const relatedTarget = event.relatedTarget;
      if (relatedTarget instanceof Element && relatedTarget.closest("a, button, [data-cursor='hover']")) {
        return;
      }

      setHovered(false);
    };

    const handleWindowMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        setVisible(false);
        setPressed(false);
      }
    };

    const handlePointerDown = () => {
      if (supportsDesktopCursor()) {
        setPressed(true);
      }
    };

    const handlePointerUp = () => {
      setPressed(false);
    };

    const handleWindowFocus = () => {
      if (supportsDesktopCursor()) {
        setVisible(true);
      }
    };

    const handleWindowBlur = () => {
      setVisible(false);
      setPressed(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("mouseout", handleWindowMouseOut);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut);
    finePointer.addEventListener("change", syncCapability);
    coarsePointer.addEventListener("change", syncCapability);
    hoverCapability.addEventListener("change", syncCapability);
    reduceMotion.addEventListener("change", syncCapability);

    return () => {
      document.body.classList.remove("has-custom-cursor", "has-reduced-motion");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("mouseout", handleWindowMouseOut);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      finePointer.removeEventListener("change", syncCapability);
      coarsePointer.removeEventListener("change", syncCapability);
      hoverCapability.removeEventListener("change", syncCapability);
      reduceMotion.removeEventListener("change", syncCapability);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className={[
        "custom-cursor",
        visible ? "is-visible" : "",
        hovered ? "is-hovered" : "",
        pressed ? "is-pressed" : "",
        reducedMotion ? "is-reduced-motion" : "",
      ].filter(Boolean).join(" ")}
      style={
        {
          "--cursor-x": `${position.x}px`,
          "--cursor-y": `${position.y}px`,
        } as CSSProperties
      }
      aria-hidden="true"
    />
  );
}
