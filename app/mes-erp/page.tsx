import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { smartFactoryProfile } from "@/lib/smart-factory";

export default function MesErpPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="MES / ERP — اختياري كما في العرض" description={siteConfig.nameAr} />
      <HonestyNote>العرض يطلب سعرين منفصلين لـ MES وERP إن بيعا وحدهما. نحن لا نبيع رخصة SAP من هذه الصفحة.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">MES</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.mes}</CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">ERP</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.erp}</CardContent>
      </Card>
      <HumanInTheLoop note="أي ربط محاسبي أو أمر إنتاج يبقى بعد عقد واعتماد بشري." />
      <SalesCallBar extra="MES/ERP — أريد نطاق دمج لا رخصة مخترعة" />
    </div>
  );
}
