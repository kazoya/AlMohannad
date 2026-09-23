import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { smartFactoryProfile } from "@/lib/smart-factory";

export default function CyberPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="وحدة الأمن السيبراني — اختيارية" description={siteConfig.nameAr} />
      <HonestyNote>لا نعد بجدار ناري صناعي من صفحة تسويق. نذكر الضوابط الرقمية الموجودة فعلاً.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">العرض</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          وحدة اختيارية لحماية وحدة الإنتاج. في تقييم العطاء تُسعَّر منفصلة ويُثبت سعر التوسعة لعامين.
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">في هذه المنصة</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.cyber}</CardContent>
      </Card>
      <SalesCallBar extra="الأمن — أريد ضوابط رقمية لا وعداً OT مخترعاً" />
    </div>
  );
}
