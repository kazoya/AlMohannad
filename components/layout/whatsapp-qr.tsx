"use client";

import { QRCodeSVG } from "qrcode.react";
import { getTelQrValue, getWhatsAppPhoneDisplay, getWhatsAppQrValue, getWhatsAppUrl } from "@/lib/config";
import { useMounted } from "@/lib/use-mounted";

export function WhatsAppQr() {
  const mounted = useMounted();
  const qr = getWhatsAppQrValue();
  const tel = getTelQrValue();
  const link = getWhatsAppUrl();
  const phone = getWhatsAppPhoneDisplay();
  if (!qr || !link) return null;
  return (
    <div className="space-y-3">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex cursor-pointer items-center gap-3 rounded-xl border bg-card p-3 hover:border-gold/50"
      >
        <span className="rounded-md bg-white p-1">
          {mounted ? <QRCodeSVG value={qr} size={72} level="M" /> : <span className="block size-[72px] bg-white" />}
        </span>
        <span className="text-right text-sm">
          <span className="block font-medium">واتساب المبيعات والجودة</span>
          <span className="mt-1 block font-mono text-xs text-muted-foreground" dir="ltr">
            {phone}
          </span>
        </span>
      </a>
      {tel ? (
        <a
          href={tel}
          className="flex cursor-pointer items-center gap-3 rounded-xl border bg-card p-3 hover:border-gold/50"
        >
          <span className="rounded-md bg-white p-1">
            {mounted ? <QRCodeSVG value={tel} size={72} level="M" /> : <span className="block size-[72px] bg-white" />}
          </span>
          <span className="text-right text-sm">
            <span className="block font-medium">امسح للاتصال بالرقم</span>
            <span className="mt-1 block font-mono text-xs text-muted-foreground" dir="ltr">
              {phone}
            </span>
          </span>
        </a>
      ) : null}
    </div>
  );
}
