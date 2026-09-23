import type { ReadinessRow } from "@/types";

export const readinessRows: ReadinessRow[] = [
  {
    source: "موقع رسمي",
    exists: "no",
    digital: "no",
    structured: "no",
    historicalDepth: "غير موجود",
    api: "no",
    aiReadiness: "يحتاج موقعاً أولاً",
  },
  {
    source: "دليل الأردن",
    exists: "yes",
    digital: "partial",
    structured: "partial",
    historicalDepth: "سجل 2007",
    api: "no",
    aiReadiness: "ضعيف — نص عام فقط",
  },
  {
    source: "سجلات بسترة / تبريد",
    exists: "unknown",
    digital: "unknown",
    structured: "unknown",
    historicalDepth: "غير معروف",
    api: "unknown",
    aiReadiness: "يحتاج اكتشافاً داخلياً",
  },
  {
    source: "قائمة الموزّعين",
    exists: "unknown",
    digital: "unknown",
    structured: "unknown",
    historicalDepth: "غير معروف",
    api: "unknown",
    aiReadiness: "غير معروف",
  },
];

export const readiness = readinessRows;
