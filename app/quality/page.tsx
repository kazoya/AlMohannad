import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    title: "سلامة الغذاء قبل الجملة التسويقية",
    text: "أي ادّعاء صحي أو «طبيعي 100٪» يُعلَّق حتى ملف مختبر. المنصة تعرض المسار لا النتيجة.",
  },
  {
    title: "ISO 22000 كتقييم ذاتي",
    text: "نفس عقد APCA: تختبر معرفتك وتُصدر إتمام تقييم ذاتي. ليست شهادة اعتماد من جهة مانحة.",
  },
  {
    title: "HACCP على الدفعة",
    text: "حرارة الاستلام، البسترة، التعبئة، التبريد. الانحراف يقترح إيقافاً بشرياً.",
  },
  {
    title: "ISO 9001 للوثائق",
    text: "إن لم توجد إجراءات رقمية نكتب «غير معروف». لا سياسات مخترعة.",
  },
];

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="الجودة والغذاء" description="الوعد الذي يسمعه الموزّع في عشر ثوانٍ: الدفعة قابلة للتتبع والإيقاف — لا شعار أجمل." />
      <HonestyNote>لا شهادة آيزو سارية نُشرت في المصدر العام. الجودة هنا مسار عمل لا ختم مزوّر.</HonestyNote>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
          </Card>
        ))}
      </div>
      <SalesCallBar extra="الجودة — أرسل لي آخر سجل بسترة إن وُجد" />
    </div>
  );
}
