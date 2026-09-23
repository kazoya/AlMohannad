import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function BrandMark({
  href = "/",
  showText = true,
  tone = "dark",
}: {
  href?: string;
  showText?: boolean;
  tone?: "light" | "dark";
}) {
  const textMain = tone === "dark" ? "text-sidebar-foreground" : "text-foreground";
  const textMuted = tone === "dark" ? "text-sidebar-foreground/65" : "text-muted-foreground";
  const content = (
    <span className="flex items-center gap-3">
      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-gold/40 bg-white p-1">
        <BrandLogo alt={siteConfig.nameAr} priority />
      </span>
      {showText ? (
        <span className="min-w-0 text-right">
          <span className="block text-[10px] tracking-[0.18em] text-gold uppercase">{siteConfig.brandLine}</span>
          <span className={cn("mt-0.5 block text-sm font-semibold leading-5", textMain)}>المهند للألبان</span>
          <span className={cn("block text-[11px] leading-4", textMuted)}>آيزو · تبريد · جودة</span>
        </span>
      ) : null}
    </span>
  );
  if (!href) return content;
  return (
    <Link href={href} className="block cursor-pointer outline-none hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold/60">
      {content}
    </Link>
  );
}
