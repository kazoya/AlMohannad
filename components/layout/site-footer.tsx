import { BrandLogo } from "@/components/layout/brand-logo";
import { DeveloperQr } from "@/components/layout/developer-qr";
import { WhatsAppQr } from "@/components/layout/whatsapp-qr";
import { getCompanyWebsiteUrl, siteConfig } from "@/lib/config";

export function SiteFooter() {
  const website = getCompanyWebsiteUrl();
  return (
    <footer className="mt-16 border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-gold/40 bg-white p-1">
              <BrandLogo alt={siteConfig.nameAr} />
            </span>
            <div>
              <p className="text-sm font-medium">{siteConfig.promiseAr}</p>
              <p className="text-xs text-muted-foreground">
                {siteConfig.nameAr} · منذ {siteConfig.since}
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">{siteConfig.addressAr}</p>
          <p className="text-sm leading-7 text-muted-foreground">{siteConfig.hoursAr}</p>
          <a href={website} className="text-sm text-copper underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
            {siteConfig.websiteLabelAr}
          </a>
          <p className="text-xs leading-6 text-muted-foreground">
            هذا النموذج تصور تقني مستقل لأغراض العرض والنقاش. ليس نظاماً رسمياً للشركة، وليس اعتماد آيزو من جهة مانحة.
            أسلوب التقييم الذاتي مستوحى من أكاديمية APCA في apcasystems.
          </p>
        </div>
        <div className="space-y-4">
          <WhatsAppQr />
          <DeveloperQr />
        </div>
      </div>
    </footer>
  );
}
