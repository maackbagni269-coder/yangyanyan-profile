"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "问豆苗", href: "/ask-doumiao/" },
  { label: "项目资料", href: "/projects/" },
  { label: "成果展示", href: "/showcase/" },
  { label: "文章陈列室", href: "/articles/" },
  { label: "联系我", href: "/contact/" },
];

export function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label="打开移动端菜单"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
      {isOpen ? (
        <nav className="mobile-menu" aria-label="移动端导航菜单">
          <button
            className="mobile-menu__close"
            type="button"
            aria-label="关闭移动端菜单"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <ul className="mobile-menu__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="mobile-menu__link"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}

export function MobileMenu() {
  return null;
}
