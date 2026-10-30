"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "/"], ["Projects", "/projects"], ["Research", "/research"],
  ["Experience", "/experience"], ["About", "/about"], ["Contact", "/contact"]
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="Dao Xuan Quang Minh, home">DXQM<span>.</span></Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button>
      <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
      </nav>
      <a className="header-contact" href="mailto:daoxuanquangminh2004@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </div>
  </header>;
}
