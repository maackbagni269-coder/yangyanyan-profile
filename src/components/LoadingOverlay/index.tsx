"use client";

import { useEffect, useState } from "react";

export function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFading(true), 200);
    const hideTimer = window.setTimeout(() => setVisible(false), 600);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="loading-overlay"
      style={{ opacity: fading ? 0 : 1, transition: "opacity 0.4s ease" }}
      aria-hidden="true"
    >
      <div className="loading-overlay__content">
        <img src="/assets/doumiao/doumiao-body.png" alt="" className="loading-overlay__icon" />
        <p className="loading-overlay__text">载入中...</p>
      </div>
    </div>
  );
}
