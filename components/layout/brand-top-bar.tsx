import { MapPin } from "lucide-react";
import { formatPhoneDisplay, getCompanyWebsiteUrl, getContactEmails, siteConfig } from "@/lib/config";

export function BrandTopBar() {
  const emails = getContactEmails();
  const website = getCompanyWebsiteUrl();
  return (
    <div className="border-b border-primary/20 bg-primary text-[11px] text-primary-foreground/90">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-1.5 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3 text-gold" aria-hidden />
            {siteConfig.cityDetailAr} · منذ {siteConfig.since}
          </span>
          {siteConfig.phones.slice(0, 2).map((phone) => (
            <a key={phone} href={`tel:+${phone}`} className="cursor-pointer hover:text-gold" dir="ltr">
              {formatPhoneDisplay(phone)}
            </a>
          ))}
          {emails.slice(0, 1).map((email) => (
            <a key={email} href={`mailto:${email}`} className="hidden cursor-pointer hover:text-gold md:inline" dir="ltr">
              {email}
            </a>
          ))}
        </div>
        <a href={website} target="_blank" rel="noreferrer" className="cursor-pointer font-medium text-gold">
          دليل الأردن
        </a>
      </div>
    </div>
  );
}
