"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import { findNavLabel } from "@/lib/nav";

export function CommandBar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 border-b border-gold/25 bg-background/95 backdrop-blur">
      <div className="flex min-h-[4.75rem] items-center justify-between gap-3 px-4 py-1.5">
        <div className="flex min-w-0 items-center gap-2">
          <Button type="button" variant="ghost" size="icon" className="cursor-pointer lg:hidden" onClick={onOpenMenu} aria-label="فتح القائمة">
            <Menu />
          </Button>
          <Link href="/" className="relative hidden h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-gold/40 bg-white p-0.5 sm:block" aria-label="الرئيسية">
            <BrandLogo alt="" />
          </Link>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{findNavLabel(pathname)}</p>
            <p className="hidden text-xs text-muted-foreground sm:block">آيزو ذاتي · HACCP · سلسلة تبريد</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <DeveloperQr compact />
          <DemoBadge label="تصور مستقل" className="hidden md:inline-flex" />
          <Button asChild size="sm" variant="outline" className="hidden cursor-pointer sm:inline-flex">
            <Link href="/contests">تقييم الآيزو</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
