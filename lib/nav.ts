export type NavItem = { href: string; label: string };
export type NavGroup = { id: string; label: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    id: "concept",
    label: "التصور",
    items: [
      { href: "/", label: "الرئيسية" },
      { href: "/overview", label: "التصور التنفيذي" },
      { href: "/delta", label: "من نحن على الويب" },
      { href: "/products", label: "خط الألبان" },
      { href: "/quality", label: "الجودة والغذاء" },
    ],
  },
  {
    id: "iso",
    label: "الآيزو والغذاء",
    items: [
      { href: "/contests", label: "تقييم آيزو ذاتي" },
      { href: "/schools", label: "نقاط HACCP" },
      { href: "/marketing", label: "رسائل المبيعات" },
      { href: "/education", label: "أكاديمية الآيزو" },
      { href: "/reuse", label: "سلسلة التبريد" },
    ],
  },
  {
    id: "operations",
    label: "العمليات",
    items: [
      { href: "/workflow", label: "من الحليب إلى الرف" },
      { href: "/bottlenecks", label: "الاختناقات الظاهرة" },
      { href: "/automation", label: "فرص الأتمتة" },
      { href: "/ai", label: "فرص الذكاء" },
      { href: "/crm", label: "العملاء والطلبات" },
      { href: "/knowledge", label: "معرفة المصنع" },
    ],
  },
  {
    id: "management",
    label: "الإدارة",
    items: [
      { href: "/dashboard", label: "لوحة القيادة" },
      { href: "/roi", label: "العائد على الاستثمار" },
      { href: "/architecture", label: "البنية المقترحة" },
      { href: "/pilot", label: "خطة التنفيذ" },
    ],
  },
  {
    id: "smart-factory",
    label: "المصنع الذكي",
    items: [
      { href: "/smart-factory", label: "خط المصنع 4.0" },
      { href: "/iiot", label: "بوابة IIoT" },
      { href: "/mes-erp", label: "MES / ERP" },
      { href: "/traceability", label: "تتبع الدفعة" },
      { href: "/digital-twin", label: "التوأم الرقمي" },
      { href: "/cyber", label: "الأمن السيبراني" },
      { href: "/course", label: "المساق التعليمي" },
    ],
  },
  {
    id: "discovery",
    label: "الاكتشاف",
    items: [
      { href: "/assessment", label: "التقييم" },
      { href: "/assessment/results", label: "نتائج التقييم" },
      { href: "/readiness", label: "جاهزية البيانات" },
      { href: "/contact", label: "تواصل معنا" },
    ],
  },
];

export function findNavLabel(pathname: string): string {
  if (pathname === "/") return "الرئيسية";
  for (const group of navGroups) {
    const match = group.items.find((item) => item.href === pathname);
    if (match) return match.label;
  }
  return "المنصة";
}
