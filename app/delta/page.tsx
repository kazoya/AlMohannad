import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

export default function AboutWebPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="ماذا يقول الويب عن الشركة"
        description="فحص المصدر العام فقط. لا صفحة رسمية، لا شعار معتمد، لا شهادات مرفوعة."
        demo={false}
      />
      <HonestyNote>
        رابط البحث الذي زُوّد يقود إلى اسم الشركة على Google. الدليل الوحيد التفصيلي الذي وجدناه: دليل الأردن.
      </HonestyNote>
      <Card>
        <CardContent className="space-y-3 p-5 text-sm leading-7 text-muted-foreground">
          <p>
            {siteConfig.nameAr} مسجّلة في عمّان منذ {siteConfig.since}. الغايات المعلنة تشمل صناعة الألبان ومشتقاتها
            واستيراد الآلات والمعدات والمواد الخام.
          </p>
          <p>
            الهاتف والبريد في الدليل فارغان. رقم التواصل في هذه المنصة هو ما زوّده صاحب المشروع للواتساب والاتصال:
            <span dir="ltr"> +962 7 7557 7127</span>.
          </p>
          <p>أي انتماء لمجموعة استثمارية أو برنامج «صنع في الأردن» لم يُثبَت من صفحة رسمية في هذا الفحص — لذلك لا يظهر كحقيقة.</p>
        </CardContent>
      </Card>
      <SalesCallBar extra="من نحن على الويب — أرسل لي الموقع الرسمي إن وُجد" />
    </div>
  );
}
