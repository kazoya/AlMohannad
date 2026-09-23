import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { title: "الخزان", text: "حرارة الحفظ بعد البسترة. أي ارتفاع يُقترح للتنبيه لا للإتلاف الآلي." },
  { title: "السيارة", text: "مسجل حرارة على خط التوزيع. الانقطاع قرار جودة بشري." },
  { title: "الرف", text: "الموزّع يرى آخر قراءة خروج. هذا ما يغلق الطلب." },
];

export default function ColdChainPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="سلسلة التبريد" description="من الخزان إلى السيارة إلى الثلاجة. الحرارة قصة البيع." />
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
          </Card>
        ))}
      </div>
      <SalesCallBar extra="سلسلة التبريد — أريد ربط مسجلات الحرارة" />
    </div>
  );
}
