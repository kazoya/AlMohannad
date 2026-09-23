import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bottlenecks } from "@/data/bottlenecks";
import { departmentLabel } from "@/lib/format";

export default function BottlenecksPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="الاختناقات الظاهرة بعد فحص الويب" description="ملاحظات من دليل الأردن ومن غياب الموقع الرسمي." demo={false} />
      <HonestyNote>هذه قراءة خارجية. قد يكون لدى الشركة أنظمة داخلية لا تظهر للزائر.</HonestyNote>
      {bottlenecks.map((item) => (
        <Card key={item.id} className="shadow-sm">
          <CardHeader>
            <p className="text-xs text-copper">{departmentLabel[item.department]}</p>
            <CardTitle className="text-base">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
            <p>{item.description}</p>
            <p>إشارة للتحقق: {item.signalToInvestigate}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
