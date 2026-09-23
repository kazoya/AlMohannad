import { BarCompare } from "@/components/charts/bar-compare";
import { TrendChart } from "@/components/charts/trend-chart";
import { HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";

const trend = [
  { m: "1", accounts: 2, cartons: 8 },
  { m: "2", accounts: 4, cartons: 18 },
  { m: "3", accounts: 7, cartons: 31 },
  { m: "4", accounts: 12, cartons: 54 },
];

const bars = [
  { ch: "موزّع", n: 40 },
  { ch: "تجزئة", n: 28 },
  { ch: "HORECA", n: 22 },
  { ch: "جودة", n: 10 },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="لوحة القيادة" description="مؤشرات تجريبية لشكل المتابعة بعد تجريب 12 موزّعاً." />
      <HonestyNote>كل رقم هنا افتراضي. لا أرقام إنتاج منشورة — لن نملأها تخميناً.</HonestyNote>
      <div className="grid gap-3 md:grid-cols-4">
        <KpiCard label="موزّعون تجريبيون" value={12} delta="تجريبي" />
        <KpiCard label="دفعات بانتظار اعتماد" value={2} />
        <KpiCard label="طلبات واتساب مفتوحة" value={9} />
        <KpiCard label="نشرات أصناف مكتملة" value="0 / 5" hint="كلها رقيقة علناً" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-4">
          <p className="mb-2 text-sm font-medium">نمو الحسابات والكراتين — سيناريو</p>
          <TrendChart
            data={trend}
            xKey="m"
            series={[
              { key: "accounts", name: "حسابات", color: "#1e3a5f" },
              { key: "cartons", name: "كراتين", color: "#c9a227" },
            ]}
          />
        </div>
        <div className="rounded-xl border bg-card p-4">
          <p className="mb-2 text-sm font-medium">مزيج القنوات — سيناريو ٪</p>
          <BarCompare data={bars} xKey="ch" yKey="n" />
        </div>
      </div>
      <SalesCallBar extra="لوحة القيادة — أريد أرقامنا الحقيقية بدل التجريبي" />
    </div>
  );
}
