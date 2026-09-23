import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    title: "تقييم ذاتي لا شهادة مانحة",
    text: "كما في أكاديمية APCA: تختبر معرفتك وتُصدر إتمام تقييم. الختم الذهبي مسار منفصل إن قررتموه مع جهة معتمدة.",
  },
  {
    title: "ثلاثة مسارات",
    text: "ISO 22000 لسلامة الغذاء، HACCP لنقاط التحكم، ISO 9001 للوثائق. الفجوات تُعلن لا تُغطى.",
  },
  {
    title: "البيع بعد الفهم",
    text: "الموزّع يفهم أنكم ترصدون الدفعة. هذا أقوى من شعار آيزو على العبوة بلا ملف.",
  },
];

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="أكاديمية الآيزو" description="تعليم الفريق الداخلي قبل أي تدقيق خارجي." />
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
      <SalesCallBar extra="أكاديمية الآيزو — أريد جلسة للفريق" />
    </div>
  );
}
