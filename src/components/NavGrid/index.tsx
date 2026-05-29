import Link from "next/link";

const navItems = [
  { label: "问豆苗", href: "/ask-doumiao/" },
  { label: "项目资料", href: "/projects/" },
  { label: "成果展示", href: "/showcase/" },
  { label: "文章陈列室", href: "/articles/" },
  { label: "联系我", href: "/contact/" },
  { label: "下载 App", href: "/download/" },
];

export function NavGrid() {
  return (
    <nav className="nav-grid" aria-label="主导航">
      <ul>
        {navItems.map((item) => (
          <li className="nav-grid__item" key={item.href}>
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
