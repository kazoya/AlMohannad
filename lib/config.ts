function readPublic(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function parseEmailList(raw: string): string[] {
  return raw
    .split(/[,;\s]+/)
    .map((e) => e.trim())
    .filter((e) => e.includes("@"));
}

export const siteConfig = {
  nameAr: "المهند للصناعات البلاستيكية",
  nameEn: "Al Mohannad Plastic Industries",
  brandLine: "AL MOHANNAD",
  productName: "تصور كتالوج أكواب وتعبئة لمنتجات الألبان والآيس كريم",
  parentAr: "صناعات بلاستيكية — مدينة الملك عبدالله الثاني الصناعية، سحاب",
  parentEn: "Plastic packaging — King Abdullah II Industrial City, Sahab",
  recipient: "مدير المبيعات",
  recipientRole: "المهند للصناعات البلاستيكية",
  country: "الأردن",
  city: "سحاب",
  cityDetailAr: "مدينة الملك عبدالله الثاني الصناعية — سحاب",
  since: 2009,
  websiteUrl: "https://www.eaiia.org/en-almohannad",
  websiteLabelAr: "عضوية EAIIA (الموقع المدرج غير متاح)",
  defaultMapsUrl: "https://www.google.com/maps/search/Al+Mohannad+Plastic+Sahab",
  defaultWhatsAppPhone: "962778448440",
  defaultWhatsAppPrefill:
    "السلام عليكم إدارة المهند للصناعات البلاستيكية. بخصوص ",
  defaultEmails: [] as const,
  phones: ["962778448440", "962795577905", "96264022114"] as const,
  salesPhone: "962778448440",
  hoursAr: "ساعات الدوام التفصيلية غير منشورة — تأكيد عبر الهاتف",
  addressAr: "مدينة الملك عبدالله الثاني الصناعية، سحاب، الأردن",
  promiseAr: "طلب أكواب وتعبئة يُغلق بالواتساب بعد أن يرى مدير المبيعات كتالوج ومسار تسعير واضح",
  developer: {
    whatsappPhone: "962787523192",
    nameAr: "م. صهيب عسراوي",
    email: "suhaib@muqasa-jo.com",
    prefill: "المهند بلاستيك",
  },
} as const;

export function getDiscoveryFormUrl(): string {
  return readPublic("NEXT_PUBLIC_DISCOVERY_FORM_URL");
}

export function getContactEmails(): string[] {
  const fromEnv = parseEmailList(readPublic("NEXT_PUBLIC_CONTACT_EMAILS"));
  if (fromEnv.length) return fromEnv;
  const single = readPublic("NEXT_PUBLIC_CONTACT_EMAIL");
  if (single) {
    const parts = parseEmailList(single);
    if (parts.length) return parts;
  }
  return [...siteConfig.defaultEmails];
}

export function getMapsUrl(): string {
  return readPublic("NEXT_PUBLIC_MAPS_URL") || siteConfig.defaultMapsUrl;
}

export function getCompanyWebsiteUrl(): string {
  return readPublic("NEXT_PUBLIC_COMPANY_WEBSITE") || siteConfig.websiteUrl;
}

export function getWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_WHATSAPP_PHONE") || siteConfig.defaultWhatsAppPhone;
  return raw.replace(/[^\d]/g, "");
}

export function getWhatsAppPhoneDisplay(): string {
  const digits = getWhatsAppPhone();
  if (!digits) return "";
  return `+${digits}`;
}

export function getWhatsAppPrefill(): string {
  return (
    readPublic("NEXT_PUBLIC_WHATSAPP_PREFILL") || siteConfig.defaultWhatsAppPrefill
  );
}

export function getWhatsAppUrl(extra = ""): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  const text = `${getWhatsAppPrefill()}${extra}`.trim();
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppQrValue(): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  return `https://wa.me/${phone}`;
}

export function getTelQrValue(): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  return `tel:+${phone}`;
}

export function getDeveloperEmail(): string {
  return readPublic("NEXT_PUBLIC_DEVELOPER_EMAIL") || siteConfig.developer.email;
}

export function getDeveloperWhatsAppPhone(): string {
  const raw =
    readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP") ||
    siteConfig.developer.whatsappPhone ||
    "962787523192";
  return raw.replace(/[^\d]/g, "");
}

export function getDeveloperWhatsAppDisplay(): string {
  const digits = getDeveloperWhatsAppPhone();
  if (!digits) return "";
  return `+${digits}`;
}

export function getDeveloperWhatsAppUrl(extra = ""): string {
  const phone = getDeveloperWhatsAppPhone();
  if (!phone) return "";
  const text = extra.trim();
  if (!text) return `https://wa.me/${phone}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getDeveloperQrValue(): string {
  return getDeveloperWhatsAppUrl(
    `مرحبا م. صهيب — بخصوص منصة ${siteConfig.developer.prefill}`,
  );
}

export function getDeveloperMailtoUrl(): string {
  return getDeveloperQrValue();
}




export function getSiteUrl(): string {
  const fromEnv = readPublic("NEXT_PUBLIC_SITE_URL");
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/^https?:\/\//, "")}`;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/[^\d]/g, "");
  if (d.startsWith("962") && d.length === 12) {
    return `+${d.slice(0, 3)} ${d.slice(3, 4)} ${d.slice(4, 8)} ${d.slice(8)}`;
  }
  if (d.startsWith("962") && d.length === 11) {
    return `+${d.slice(0, 3)} ${d.slice(3, 4)} ${d.slice(4)}`;
  }
  return `+${d}`;
}

export function getSalesCallUrl(): string {
  return `tel:+${getWhatsAppPhone() || siteConfig.salesPhone}`;
}
