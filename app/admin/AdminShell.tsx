"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "./AdminSidebar";
import s from "@/styles/admin.module.css";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className={s.shell}>
      <AdminSidebar />
      <div className={s.content}>{children}</div>
    </div>
  );
}
