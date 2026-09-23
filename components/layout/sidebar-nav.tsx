"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="التنقل الرئيسي" className="space-y-6 pb-8">
      {navGroups.map((group) => (
        <details
          key={group.id}
          className="group rounded-xl border border-transparent open:border-sidebar-border/70 open:bg-sidebar-accent/25"
          open={group.items.some((item) => item.href === pathname || (item.href !== "/" && pathname.startsWith(`${item.href}/`))) ? true : undefined}
        >
          <summary className="cursor-pointer list-none px-3 py-2 text-[11px] font-medium tracking-[0.12em] text-sidebar-foreground/55 transition-colors hover:text-sidebar-foreground [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-2">
              {group.label}
              <span aria-hidden className="text-gold transition-transform group-open:rotate-45">＋</span>
            </span>
          </summary>
          <ul className="space-y-0.5 px-1 pb-2">
            {group.items.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block cursor-pointer rounded-lg border px-3 py-2 text-sm transition-colors",
                      active
                        ? "border-gold/70 bg-sidebar-accent text-gold"
                        : "border-transparent text-sidebar-foreground/75 hover:bg-sidebar-accent/70 hover:text-sidebar-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </details>
      ))}
    </nav>
  );
}
