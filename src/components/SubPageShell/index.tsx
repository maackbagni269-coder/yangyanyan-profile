import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { SubPageDecorations } from "@/components/SubPageDecorations";

type SubPageShellProps = {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  children?: ReactNode;
};

export function SubPageShell({
  title,
  subtitle,
  description,
  className,
  children,
}: SubPageShellProps) {
  return (
    <div className={`sub-page-shell${className ? ` ${className}` : ""}`}>
      <Header />
      <SubPageDecorations />
      <main className="sub-page-content">
        <section className="sub-page-heading">
          <p className="uppercase-label">{subtitle}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{description}</p>
        </section>
        <section className="content-grid" aria-label={`${subtitle}内容占位`}>
          {children ?? (
            <article className="grid-card">
              <p className="uppercase-label">Content Placeholder</p>
            </article>
          )}
        </section>
        <Link className="back-home-link hover-fill" href="/">
          Back Home
        </Link>
      </main>
    </div>
  );
}
