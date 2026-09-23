import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPhoneDisplay, getSalesCallUrl, getWhatsAppPhone, getWhatsAppUrl, siteConfig } from "@/lib/config";

export function SalesCallBar({ extra = "جولة جودة وآيزو" }: { extra?: string }) {
  return (
    <div className="rounded-2xl border border-gold/40 bg-primary px-4 py-4 text-primary-foreground shadow-md">
      <p className="text-xs font-medium tracking-[0.16em] text-gold uppercase">إلى عناية {siteConfig.recipient}</p>
      <p className="mt-1 text-sm font-semibold sm:text-base">حوّل التصور إلى جلسة عمل قصيرة مع المبيعات والجودة</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button asChild size="sm" className="cursor-pointer bg-ochre text-primary hover:bg-gold">
          <a href={getWhatsAppUrl(extra)}>
            <MessageCircle className="size-4" /> واتساب المبيعات
          </a>
        </Button>
        <Button asChild size="sm" variant="outline" className="cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
          <a href={getSalesCallUrl()}>
            <Phone className="size-4" /> {formatPhoneDisplay(getWhatsAppPhone() || siteConfig.salesPhone)}
          </a>
        </Button>
      </div>
    </div>
  );
}
