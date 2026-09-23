import { HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { qualityLots } from "@/data/contests";

export default function CrmPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="العملاء والطلبات" description="بطاقة لكل دفعة وموزّع تجريبي: إشارات CCP وحالة الرصد." />
      <HonestyNote>الصفوف أدناه تجريبية لتوضيح الآلية. ليست قاعدة عملاء حقيقية.</HonestyNote>
      <div className="grid gap-3 md:grid-cols-3">
        <KpiCard label="دفعات تجريبية" value={qualityLots.length} hint="تحت الرصد" />
        <KpiCard label="إشارات CCP" value={qualityLots.reduce((sum, lot) => sum + lot.deviationSignals, 0)} />
        <KpiCard label="قراءات تبريد" value={qualityLots.reduce((sum, lot) => sum + lot.coolingReading, 0)} />
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">طابور المتابعة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-7">
          {qualityLots.map((lot) => (
            <p key={lot.id} className="border-b border-dashed pb-2">
              <span className="font-medium">{lot.name}</span> — {lot.coordinator} — {lot.status}
            </p>
          ))}
        </CardContent>
      </Card>
      <SalesCallBar extra="CRM — أريد إدخال موزّعينا الحقيقيين" />
    </div>
  );
}
