import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { smartFactoryProfile } from "@/lib/smart-factory";

const rfpStations = [
  "تجميع",
  "مناولة",
  "تشغيل",
  "فرز",
  "تخزين",
  "اختبار جودة",
] as const satisfies ReadonlyArray<keyof typeof smartFactoryProfile.stationMap>;

export default function SmartFactoryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        eyebrow="Smart Factory analog"
        title={`خط المصنع 4.0 — ${siteConfig.nameAr}`}
        description={smartFactoryProfile.summary}
      />
      <HonestyNote>{smartFactoryProfile.honesty}</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">لماذا هذه الصفحة هنا؟</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          وثيقة العرض (demo.pdf / Smart Factory Demo) تصف خط إنتاج تعليمي: محطات مرنة، شبكات صناعية، وبوابة IIoT.
          هذه المنصة ليست PLC ولا Profinet. نترجم المطلوب إلى مسار رقمي يناسب طبيعة {siteConfig.nameAr}، ونعلن ما لا ينطبق.
        </CardContent>
      </Card>
      <div className="grid gap-3 md:grid-cols-2">
        {rfpStations.map((station) => (
          <Card key={station} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{station}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">
              {smartFactoryProfile.stationMap[station] ?? "غير منطبق — يُذكر في المقارنة لا في التشغيل."}
            </CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop note="أي إشارة تحكّم أو أمر إنتاج أو إعلان جودة يبقى بشرياً. لا نفتح صماماً ولا نوقف خطاً من هذه الصفحة." />
      <SalesCallBar extra="المصنع الذكي — أريد مناقشة المحطات الرقمية فقط" />
    </div>
  );
}
