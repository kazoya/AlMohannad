"use client";

import { QRCodeSVG } from "qrcode.react";
import { getDeveloperEmail, getDeveloperMailtoUrl, siteConfig } from "@/lib/config";
import { useMounted } from "@/lib/use-mounted";
import { cn } from "@/lib/utils";

export function DeveloperQr({ compact = false }: { compact?: boolean }) {
  const mounted = useMounted();
  const url = getDeveloperMailtoUrl();
  const email = getDeveloperEmail();
  if (!url) return null;
  const size = compact ? 80 : 112;
  return (
    <a
      href={url}
      className="flex cursor-pointer items-center gap-2 rounded-xl border border-gold/40 bg-primary p-2 text-primary-foreground outline-none hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold/60"
      aria-label={`امسح لمراسلة المبرمج ${email}`}
    >
      <span className="rounded-md bg-white p-2">
        {mounted ? (
          <QRCodeSVG value={url} size={size} level="M" marginSize={4} bgColor="#ffffff" fgColor="#111111" />
        ) : (
          <span className="block bg-white" style={{ width: size, height: size }} />
        )}
      </span>
      <span className={cn("text-sm font-medium", compact && "sr-only")}>
        امسح لمراسلة المبرمج
        <span className="mt-1 block font-mono text-[11px] opacity-80" dir="ltr">
          {email}
        </span>
      </span>
      <span className="sr-only">{siteConfig.developer.nameAr}</span>
    </a>
  );
}
