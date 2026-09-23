import { QualityReviewBoard } from "@/components/contests/contest-board";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { qualityFramework } from "@/data/contests";

export default function ContestsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        eyebrow="ISO 22000 · HACCP · ISO 9001"
        title="تقييم ذاتي للآيزو: الانحراف يُقترح — الخط لا يتوقف إلا بعدك"
        description="اختبار معرفة وإتمام تقييم ذاتي داخلي؛ لا يمثل شهادة اعتماد رسمية من جهة مانحة."
        demoLabel="دفعات تجريبية"
      />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {qualityFramework.map((rule) => (
          <Card key={rule.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{rule.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{rule.text}</CardContent>
          </Card>
        ))}
      </div>
      <QualityReviewBoard />
    </div>
  );
}
