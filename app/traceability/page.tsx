import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { smartFactoryProfile } from "@/lib/smart-factory";

export default function TraceabilityPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="تتبع RFID / IO-Link / كاميرا جودة" description={siteConfig.nameAr} />
      <HonestyNote>لا نركّب رأس RFID من المتصفح. الصفحة تترجم متطلب العرض إلى أثر تشغيلي.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">RFID + خادم بيانات</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.rfid}</CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">IO-Link</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.ioLink}</CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">كاميرا اختبار اختيارية</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.camera}</CardContent>
      </Card>
      <SalesCallBar extra="التتبع — أريد مناقشة الدفعة والعيّنة لا جهاز المختبر" />
    </div>
  );
}
