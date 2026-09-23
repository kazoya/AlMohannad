"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, LayoutDashboard, MessageCircle, MoreHorizontal, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "الرئيسية", icon: LayoutDashboard, match: (p: string) => p === "/" },
  { href: "/contests", label: "الآيزو", icon: Trophy, match: (p: string) => p.startsWith("/contests") },
  { href: "/assessment", label: "التقييم", icon: ClipboardList, match: (p: string) => p.startsWith("/assessment") },
  { href: "/contact", label: "تواصل", icon: MessageCircle, match: (p: string) => p === "/contact" },
];

export function MobileNav({ onMore }: { onMore: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="تنقل الجوال" className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 px-2 py-1.5 backdrop-blur lg:hidden">
      <ul className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.match(pathname);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex cursor-pointer flex-col items-center gap-0.5 rounded-lg py-1.5 text-[11px]",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <button type="button" onClick={onMore} className="flex w-full cursor-pointer flex-col items-center gap-0.5 rounded-lg py-1.5 text-[11px] text-muted-foreground">
            <MoreHorizontal className="size-4" />
            المزيد
          </button>
        </li>
      </ul>
    </nav>
  );
}
