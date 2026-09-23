import type { Bottleneck } from "@/types";

export const bottlenecks: Bottleneck[] = [
  {
    id: "b1",
    title: "لا موقع رسمي",
    department: "marketing",
    description: "البحث العام يصل إلى دليل بلا هاتف وبلا بريد. الموزّع لا يجد الشركة.",
    signalToInvestigate: "هل يوجد نطاق محجوز أو صفحة فيسبوك غير مُفهرسة؟",
  },
  {
    id: "b2",
    title: "كتالوج غير منشور",
    department: "sales",
    description: "غايات الصناعة معلنة، الأصناف والأوزان غير معلنة. البيع يحتاج نشرة حقيقية.",
    signalToInvestigate: "قائمة أصناف من الإنتاج لا من التخمين.",
  },
  {
    id: "b3",
    title: "الآيزو غير مثبت علناً",
    department: "quality",
    description: "لا شهادة مرفوعة. أي ختم على العبوة دون ملف يُعد مخاطرة.",
    signalToInvestigate: "هل يوجد تدقيق سابق أو فجوة تقييم ذاتي فقط؟",
  },
  {
    id: "b4",
    title: "سلسلة التبريد غير مرئية للعميل",
    department: "production",
    description: "حتى لو الرصد داخلي، المشتري لا يراه. المنصة تعرضه كاقتراح قرار بشري.",
    signalToInvestigate: "مسجلات حرارة على السيارات والخزانات.",
  },
];
