"use client";

import { QRCodeSVG } from "qrcode.react";
import {
  getDeveloperWhatsAppDisplay,
  getDeveloperWhatsAppUrl,
  siteConfig,
} from "@/lib/config";
import { useMounted } from "@/lib/use-mounted";
import { cn } from "@/lib/utils";

export function DeveloperQr({ compact = false }: { compact?: boolean }) {
  const mounted = useMounted();
  const url = getDeveloperWhatsAppUrl();
  const phone = getDeveloperWhatsAppDisplay();
  if (!url) return null;
  const size = compact ? 80 : 112;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex cursor-pointer items-center gap-2 rounded-xl border border-gold/40 bg-primary p-2 text-primary-foreground outline-none hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold/60"
      aria-label={`امسح لمراسلة المبرمج ${phone}`}
    >
      <span className="rounded-md bg-white p-2">
        {mounted ? (
          <QRCodeSVG
            value={url}
            size={size}
            level="M"
            marginSize={4}
            bgColor="#ffffff"
            fgColor="#111111"
          />
        ) : (
          <span className="block bg-white" style={{ width: size, height: size }} />
        )}
      </span>
      <span className={cn("text-sm font-medium", compact && "sr-only")}>
        امسح لمراسلة المبرمج
        <span className="mt-1 block font-mono text-[11px] opacity-80" dir="ltr">
          {phone}
        </span>
      </span>
      <span className="sr-only">{siteConfig.developer.nameAr}</span>
    </a>
  );
}
