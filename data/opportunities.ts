import type { OpportunityCard } from "@/types";

export const automationOpportunities: OpportunityCard[] = [
  {
    id: "a1",
    title: "رصد HACCP من واتساب الجودة",
    summary: "دفعة، نقطة تحكم، واقتراح إيقاف. التنفيذ لا يتم إلا بعد اعتماد بشري.",
    impact: "high",
    requiredData: ["سجلات حرارة", "معرف الدفعة"],
    difficulty: "low",
    dependencies: ["جودة", "إنتاج"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "a2",
    title: "التقاط طلب واتساب",
    summary: "استخراج الصنف والكمية والجهة ثم طابور تسعير.",
    impact: "high",
    requiredData: ["سجل واتساب", "قائمة أسعار"],
    difficulty: "low",
    dependencies: ["مبيعات"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "a3",
    title: "رسائل جاهزة للموزّع",
    summary: "نص عربي: تتبع الدفعة، تبريد، وتقييم آيزو ذاتي. المدير يضغط إرسال بعد المراجعة.",
    impact: "high",
    requiredData: ["حقائق معتمدة", "رقم واتساب"],
    difficulty: "low",
    dependencies: ["جودة", "تسويق"],
    pilotFit: "strong",
    readiness: "available_now",
  },
];

export const aiOpportunities: OpportunityCard[] = [
  {
    id: "i1",
    title: "صياغة رسالة واتساب حسب نوع الجهة",
    summary: "موزّع ≠ تجزئة ≠ جودة داخلية. النص من حقائق معتمدة فقط.",
    impact: "high",
    requiredData: ["حقائق معتمدة", "جمهور"],
    difficulty: "low",
    dependencies: ["مبيعات"],
    pilotFit: "strong",
    readiness: "available_now",
  },
  {
    id: "i2",
    title: "اكتشاف الدفعات الناقصة في الرصد",
    summary: "إذا توقفت دفعة عن التسجيل يقترح النظام مكالمة. لا إيقاف تلقائي.",
    impact: "high",
    requiredData: ["تاريخ سجلات"],
    difficulty: "medium",
    dependencies: ["CRM"],
    pilotFit: "possible",
    readiness: "needs_history",
  },
];
