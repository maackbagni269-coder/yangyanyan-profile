import type { CSSProperties } from "react";

type MotifStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--sub-motif-color"?: string;
};

const motifs = [
  { className: "sub-motif sub-motif--dot", style: { "--x": "8%", "--y": "24%", "--sub-motif-color": "#F5C842" } },
  { className: "sub-motif sub-motif--square", style: { "--x": "88%", "--y": "18%", "--sub-motif-color": "#9B6DFF" } },
  { className: "sub-motif sub-motif--ring", style: { "--x": "78%", "--y": "72%", "--sub-motif-color": "#4CAF72" } },
  { className: "sub-motif sub-motif--triangle", style: { "--x": "18%", "--y": "78%", "--sub-motif-color": "#FF6B4A" } },
  { className: "sub-motif sub-motif--cross", style: { "--x": "62%", "--y": "36%", "--sub-motif-color": "#4A9EFF" } },
  { className: "sub-motif sub-motif--tiny", style: { "--x": "38%", "--y": "86%", "--sub-motif-color": "#F5C842" } },
] satisfies { className: string; style: MotifStyle }[];

export function SubPageDecorations() {
  return (
    <div className="sub-page-decorations" aria-hidden="true">
      <span className="sub-orbit sub-orbit--left" />
      <span className="sub-orbit sub-orbit--right" />
      <span className="sub-ruler sub-ruler--top" />
      <span className="sub-ruler sub-ruler--bottom" />
      {motifs.map((motif, index) => (
        <span
          className={motif.className}
          key={index}
          style={motif.style as CSSProperties}
        />
      ))}
    </div>
  );
}
