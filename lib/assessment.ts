import { z } from "zod";

export const STORAGE_KEY = "mithaliya-discovery-assessment-v2";
const text = z.string();
const list = z.array(z.string());

export const assessmentSchema = z.object({
  lines: text,
  milkSource: text,
  processRecords: text,
  qaRelease: text,
  orderChannels: list,
  priceOwner: text,
  isoPath: text,
  previousAudit: text,
  distributorMap: text,
  websiteOwner: text,
  whatsappOwner: text,
  systems: list,
  notes: text,
});

export type AssessmentValues = z.infer<typeof assessmentSchema>;

export const defaultAssessment: AssessmentValues = {
  lines: "",
  milkSource: "",
  processRecords: "",
  qaRelease: "",
  orderChannels: [],
  priceOwner: "",
  isoPath: "",
  previousAudit: "",
  distributorMap: "",
  websiteOwner: "",
  whatsappOwner: "",
  systems: [],
  notes: "",
};

export const channelOptions = ["واتساب", "هاتف", "موزّع", "سوبرماركت", "قطاع الضيافة", "موقع"];
export const systemOptions = ["إكسل", "محاسبة", "واتساب فقط", "ERP", "غير معروف"];

export function loadAssessment(): AssessmentValues {
  if (typeof window === "undefined") return defaultAssessment;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultAssessment;
    return { ...defaultAssessment, ...JSON.parse(raw) };
  } catch {
    return defaultAssessment;
  }
}

export function saveAssessment(values: AssessmentValues) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

export function summarizeAssessment(values: AssessmentValues) {
  const filled = Object.values(values).filter((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value && String(value).trim()),
  ).length;
  const total = Object.keys(defaultAssessment).length;
  return { filled, total, pct: Math.round((filled / total) * 100) };
}
