import type { CatalogProduct } from "@/types";

const source =
  "https://www.directoryjordan.com/%D8%A7%D9%84%D9%85%D8%AB%D8%A7%D9%84%D9%8A%D9%87-%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%84%D8%A8%D8%A7%D9%86";

export const products: CatalogProduct[] = [
  {
    id: "fresh-milk",
    nameAr: "حليب طازج مبستر",
    nameEn: "Pasteurized milk",
    family: "milk",
    notes:
      "غاية الشركة المنشورة: صناعة الألبان ومشتقاتها. نشرة الصنف غير موجودة على الويب — هذا بند نقاش مع الجودة لا إعلان تسويق.",
    reuse: "سلسلة تبريد حتى التسليم",
    sourceUrl: source,
    contentStatus: "thin",
  },
  {
    id: "labneh",
    nameAr: "لبنة",
    nameEn: "Labneh",
    family: "labneh",
    notes: "مشتق ألبان شائع في الأردن. لا صورة ولا وزن منشور في المصدر العام.",
    reuse: "تتبع دفعة التعبئة",
    sourceUrl: source,
    contentStatus: "thin",
  },
  {
    id: "yogurt",
    nameAr: "لبن رائب",
    nameEn: "Yogurt",
    family: "yogurt",
    notes: "مقترح خط إنتاج للنقاش. يحتاج نشرة مختبر قبل أي ادعاء صحي.",
    reuse: "سجل حضانة وحرارة",
    sourceUrl: source,
    contentStatus: "thin",
  },
  {
    id: "white-cheese",
    nameAr: "جبن أبيض",
    nameEn: "White cheese",
    family: "cheese",
    notes: "مشتقات الألبان ضمن غايات الشركة. التفاصيل التجارية غير منشورة.",
    reuse: "ملح ونسبة رطوبة — غير مؤكدة",
    sourceUrl: source,
    contentStatus: "thin",
  },
  {
    id: "coming-line",
    nameAr: "خط إضافي قيد النقاش",
    nameEn: "Line under discussion",
    family: "coming",
    notes: "لا نختلق نكهات أو علامات تجارية فرعية. يُفتح بعد قائمة أصناف حقيقية من المصنع.",
    reuse: "غير منشور",
    sourceUrl: source,
    contentStatus: "thin",
  },
];
