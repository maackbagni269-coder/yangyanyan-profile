"use client";

import { useMemo } from "react";
import type { CSSProperties } from "react";

const shapes = ["circle", "square", "triangle", "cross", "ring"] as const;
const animations = ["float-a", "float-b", "float-c"] as const;

type MotifStyle = CSSProperties & {
  "--motif-x": string;
  "--motif-y": string;
  "--motif-size": string;
  "--motif-opacity": number;
  "--motif-duration": string;
  "--motif-delay": string;
  "--motif-rotation": string;
  "--motif-drift": string;
};

export function FloatingMotifs() {
  const motifs = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      shape: shapes[i % shapes.length],
      x: 5 + ((i * 37 + 11) % 90),
      y: 10 + ((i * 53 + 7) % 80),
      size: 6 + ((i * 17) % 12),
      opacity: 0.22 + ((i * 0.009) % 0.18),
      duration: 4 + ((i * 1.3) % 5),
      delay: (i * 0.7) % 5,
      animClass: animations[i % animations.length],
      rotation: -18 + ((i * 11) % 36),
      drift: 8 + ((i * 7) % 18),
    }));
  }, []);

  return (
    <div className="floating-motifs" aria-hidden="true">
      {motifs.map((motif) => (
        <span
          key={motif.id}
          className={`motif motif--${motif.shape} ${motif.animClass}`}
          style={
            {
              "--motif-x": `${motif.x}%`,
              "--motif-y": `${motif.y}%`,
              "--motif-size": `${motif.size}px`,
              "--motif-opacity": motif.opacity,
              "--motif-duration": `${motif.duration}s`,
              "--motif-delay": `${motif.delay}s`,
              "--motif-rotation": `${motif.rotation}deg`,
              "--motif-drift": `${motif.drift}px`,
            } as MotifStyle
          }
        />
      ))}
    </div>
  );
}
