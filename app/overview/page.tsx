import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const known = [
  "الاسم: الشركة المهند / المهند لمنتجات الألبان",
  "المكان: عمّان، الأردن",
  "التأسيس في السجل العام: 18 كانون الثاني 2007",
  "الغايات: صناعة الألبان ومشتقاتها واستيراد الآلات والمواد الخام",
  "دوام معلن في الدليل: أحد–خميس 9–5",
];
const unknown = [
  "موقع رسمي",
  "كتالوج أصناف وأوزان",
  "شهادة آيزو سارية",
  "طاقة الخطوط ودول التصدير",
  "بريد مبيعات منشور",
];
const next = [
  "قائمة أصناف حقيقية من المصنع",
  "سجلات بسترة وتبريد إن وُجدت",
  "تقييم ذاتي ISO 22000 / HACCP / 9001",
  "واتساب المبيعات المعتمد في هذه المنصة",
];

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="التصور التنفيذي"
        description="الإدارة ترى مصنعاً ألبانياً يحتاج واجهة جودة تغلق صفقة التوزيع. ليست كتالوج صور ولا شهادات مخترعة."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">ما هو منشور</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            <ul className="list-disc space-y-1 pr-4">
              {known.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">غير معروف — لا نلفّقه</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            <ul className="list-disc space-y-1 pr-4">
              {unknown.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">ماذا نبني الآن</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">
            <ul className="list-disc space-y-1 pr-4">
              {next.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <HonestyNote>
        أسلوب التقييم الذاتي يعني إتماماً وتقييماً داخلياً، ولا يمثل اعتماداً أو شهادة صادرة عن جهة مانحة.
      </HonestyNote>
      <SalesCallBar extra="التصور التنفيذي — أريد جولة جودة هذا الأسبوع" />
    </div>
  );
}
