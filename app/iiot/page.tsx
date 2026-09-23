import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { smartFactoryProfile } from "@/lib/smart-factory";

const protocols = [
  { title: "MQTT / REST / Node-RED", text: "في العرض: بوابة IIoT. هنا: بطاقة طلب/أصل عبر واتساب أو API، بلا جهاز صناعي في هذا التصور." },
  { title: "OPC-UA / TCP-IP", text: "معيار أتمتة في المختبر التعليمي. في المنصة: واجهات واضحة وصدق المصدر بدل محاكاة بروتوكول." },
  { title: "لوحة لمس", text: "HMI في المحطة. هنا: لوحة القيادة العربية في /dashboard." },
];

export default function IiotPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="بوابة IIoT الرقمية" description={`${siteConfig.nameAr} — ${smartFactoryProfile.modeLabel}`} />
      <HonestyNote>لا جهاز MQTT حي في هذا التصور. الصفحة تشرح المقابل الرقمي فقط.</HonestyNote>
      {protocols.map((item) => (
        <Card key={item.title} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
        </Card>
      ))}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">ما ينطبق على هذا المصنع</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.iiot}</CardContent>
      </Card>
      <SalesCallBar extra="بوابة IIoT — أريد مسار بطاقات لا جهازاً تجريبياً" />
    </div>
  );
}
