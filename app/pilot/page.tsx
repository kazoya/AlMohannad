import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weeks = [
  { t: "الأسبوع 1", d: "قائمة الأصناف الحقيقية + أي سجلات بسترة/تبريد موجودة + قرار: تقييم ذاتي لا ختم مزوّر." },
  { t: "الأسبوع 2", d: "تجريب 4 موزّعين في عمّان. رسالة واتساب موحّدة. نقطة HACCP واحدة مكتوبة." },
  { t: "الأسبوع 3–4", d: "لوح الدفعات يعمل. إيقاف واحد معتمد بشرياً كتمرين. لا إتلاف حقيقي دون الجودة." },
  { t: "الشهر 2", d: "التقاط طلب واتساب. نشرة عربية لصنف واحد مكتمل. موقع رسمي أو صفحة هبوط إن رغبتم." },
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="خطة التنفيذ" description="تجريب ضيق يمكن لمدير المبيعات والجودة قيادته." demo={false} />
      <HonestyNote>الخطة مقترح نقاش. المواعيد تُحدَّد بعد التقييم.</HonestyNote>
      {weeks.map((week) => (
        <Card key={week.t} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{week.t}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">{week.d}</CardContent>
        </Card>
      ))}
      <SalesCallBar extra="خطة التنفيذ — نبدأ الأسبوع الأول بقائمة الأصناف" />
    </div>
  );
}
