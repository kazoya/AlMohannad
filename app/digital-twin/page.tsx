import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { smartFactoryProfile } from "@/lib/smart-factory";

export default function DigitalTwinPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="التوأم الرقمي — اختياري" description={siteConfig.nameAr} />
      <HonestyNote>لا محاكاة 3D حيّة في هذا الإصدار. الصفحة تعلن الفجوة بدل اختراع محطة افتراضية.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">ماذا يطلب العرض</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          تشغيل افتراضي قبل التشغيل الحقيقي، مع رسوم ثلاثية ومحاكاة المحطة. هذا بند اختياري في تقييم العرض.
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">ماذا نطبّق هنا</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.digitalTwin}</CardContent>
      </Card>
      <SalesCallBar extra="التوأم الرقمي — أريد نطاق محاكاة إن كان ينطبق" />
    </div>
  );
}
