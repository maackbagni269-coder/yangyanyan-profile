"use client";

import { articleEntries } from "@/data/articles";

export function ArticleEntryList() {
  const openUrl = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="article-entry-list">
      {articleEntries.map((entry, index) =>
        entry.clickable ? (
          <button
            className="article-entry article-entry--clickable"
            key={entry.title}
            onClick={() => openUrl(entry.url)}
            type="button"
          >
            <span className="article-entry__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="article-entry__text">
              <span className="article-entry__title">{entry.platform}</span>
              <span className="article-entry__description">{entry.summary}</span>
            </span>
            <span className="article-entry__action">{entry.actionLabel}</span>
          </button>
        ) : (
          <article className="article-entry article-entry--static" key={entry.title}>
            <span className="article-entry__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            {entry.qrcodeSrc ? (
              <img
                className="article-entry__qrcode"
                src={entry.qrcodeSrc}
                alt={`${entry.platform}二维码`}
                width={100}
                height={100}
              />
            ) : null}
            <div className="article-entry__text">
              <h2 className="article-entry__title">{entry.platform}</h2>
              <p className="article-entry__description">{entry.summary}</p>
            </div>
          </article>
        ),
      )}
    </div>
  );
}
