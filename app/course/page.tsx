import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { smartFactoryProfile } from "@/lib/smart-factory";

export default function CoursePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="المساق التعليمي المتعدد الوسائط" description={siteConfig.nameAr} />
      <HonestyNote>العرض يطلب مقرراً خطوة بخطوة للطلاب. نحن لا نختلق شهادة أكاديمية.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">المقابل الرقمي</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">{smartFactoryProfile.course}</CardContent>
      </Card>
      <SalesCallBar extra="المساق — أريد تمكين الفريق لا شهادة مختبر" />
    </div>
  );
}
