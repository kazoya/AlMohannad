import { HumanInTheLoop } from "@/components/shared/human-loop";
import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { PageHeader } from "@/components/shared/page-header";
import { aiOpportunities } from "@/data/opportunities";

export default function AiPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="فرص الذكاء"
        description="صياغة رسالة واكتشاف انقطاع الطلب. لا تسعير آلي ولا ادعاء غذائي من النموذج."
      />
      <HumanInTheLoop />
      <OpportunityGrid items={aiOpportunities} />
    </div>
  );
}
