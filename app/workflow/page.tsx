import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workflow } from "@/data/workflow";

export default function WorkflowPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="من الحليب إلى الرف" description="استلام، بسترة، تعبئة، تبريد، توزيع. الداخل غير منشور فنعلنه غير معروف." />
      <HonestyNote>خطوات المصنع الداخلية غير منشورة. نصفها «غير معروف» حتى الاكتشاف.</HonestyNote>
      {workflow.map((node) => (
        <Card key={node.id} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{node.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
            <p>{node.currentProcess}</p>
            <p>اختناق محتمل: {node.possibleBottleneck}</p>
            <p>أتمتة: {node.automationOpportunity}</p>
            <p>مؤشر: {node.kpi}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
