"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "@/styles/admin.module.css";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  exact?: boolean;
}

const navItems: NavItem[] = [
  {
    href: "/admin/flores",
    label: "Flores del Catálogo",
    icon: (
      <svg className={s.sidebarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 4-3.5 8-7 11C8.5 17 5 13 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    href: "/admin/flor-del-dia",
    label: "Flor del Día",
    icon: (
      <svg className={s.sidebarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.href = "/admin/login";
  }

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebarHeader}>
        <Link href="/admin/flores" className={s.sidebarLogo}>Antheon</Link>
        <p className={s.sidebarSubtitle}>Panel de administración</p>
      </div>

      <nav className={s.sidebarNav}>
        <span className={s.sidebarSection}>Contenido</span>

        {navItems.map(({ href, label, icon, exact }) => (
          <Link
            key={href}
            href={href}
            className={`${s.sidebarLink} ${isActive(href, exact) ? s.sidebarLinkActive : ""}`}
          >
            {icon}
            {label}
          </Link>
        ))}

        <div className={s.sidebarDivider} />
        <span className={s.sidebarSection}>Sitio</span>

        <Link href="/" className={s.sidebarLink} target="_blank">
          <svg className={s.sidebarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Ver sitio
        </Link>
      </nav>

      <div className={s.sidebarBottom}>
        <button className={s.sidebarLogoutBtn} onClick={handleLogout}>
          <svg className={s.sidebarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
