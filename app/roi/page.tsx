import { RoiCalculator } from "@/components/forms/roi-calculator";
import { PageHeader } from "@/components/shared/page-header";

export default function RoiPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="العائد على الاستثمار"
        description="لا تقدير مالي جاد قبل قياس حجم التوزيع وساعات فريق المبيعات. الآلة توضح طريقة الحساب فقط."
      />
      <RoiCalculator />
    </div>
  );
}
