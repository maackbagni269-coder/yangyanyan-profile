type ResourceCardLink = {
  label: string;
  href?: string;
  external?: boolean;
  download?: boolean;
  disabled?: boolean;
};

export type ResourceCardItem = {
  title: string;
  description: string;
  tags: string[];
  links: ResourceCardLink[];
};

type ResourceCardGridProps = {
  items: ResourceCardItem[];
};

export function ResourceCardGrid({ items }: ResourceCardGridProps) {
  return (
    <>
      {items.map((item, index) => (
        <article className="resource-card" key={item.title}>
          <span className="resource-card__number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="resource-card__body">
            <h2 className="resource-card__title">{item.title}</h2>
            <p className="resource-card__description">{item.description}</p>
            <div className="resource-card__tags" aria-label={`${item.title}标签`}>
              {item.tags.map((tag) => (
                <span className="resource-card__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="resource-card__links" aria-label={`${item.title}链接`}>
            {item.links.map((link) =>
              link.disabled || !link.href ? (
                <span className="resource-card__link-disabled" key={link.label}>
                  {link.label}
                </span>
              ) : (
                <a
                  className="resource-card__link"
                  download={link.download || undefined}
                  href={link.href}
                  key={link.label}
                  rel={link.external ? "noreferrer" : undefined}
                  target={link.external ? "_blank" : undefined}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </article>
      ))}
    </>
  );
}
