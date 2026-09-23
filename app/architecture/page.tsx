import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const layers = [
  { title: "الواجهة", text: "هذه المنصة العربية: خط ألبان، آيزو ذاتي، رسائل، تقييم. لا تسجيل عملاء حقيقيين في التجريب." },
  { title: "الالتقاط", text: "واتساب +962775577127 مصدر الطلب الأول. لا بوت يرسل قبل المراجعة." },
  { title: "البيانات", text: "لاحقاً: دفعات، حرارة، شهادات. اليوم: تخزين محلي للتقييم فقط." },
  { title: "الاعتماد", text: "إيقاف دفعة، سعر، وادعاء آيزو تبقى أزراراً بشرية." },
];

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="البنية المقترحة" description="خفيفة، قابلة للتنفيذ، بلا منصة ضخمة قبل أول جولة جودة." demo={false} />
      <HonestyNote>لا قاعدة بيانات إنتاج في هذا الإصدار. فيرسيل للعرض فقط.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {layers.map((layer) => (
          <Card key={layer.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{layer.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{layer.text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
