import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { automationOpportunities } from "@/data/opportunities";

export default function AutomationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="فرص الأتمتة"
        description="نبدأ بما يغلق صفقة الموزّع هذا الشهر: واتساب، رصد HACCP، وكتالوج عربي."
      />
      <OpportunityGrid items={automationOpportunities} />
      <SalesCallBar extra="فرص الأتمتة — أريد تجريب التقاط طلب واتساب" />
    </div>
  );
}
