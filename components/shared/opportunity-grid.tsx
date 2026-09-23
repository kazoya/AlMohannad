import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { OpportunityCard } from "@/types";

const impactLabel = { low: "أثر محدود", medium: "أثر متوسط", high: "أثر مرتفع" };
const difficultyLabel = { low: "سهولة نسبية", medium: "متوسط", high: "أعقد" };
const pilotLabel = { strong: "مناسب للتجريب", possible: "ممكن لاحقاً", later: "مرحلة متقدمة" };
const readyLabel = {
  available_now: "متاح الآن بعد الاكتشاف",
  needs_history: "يحتاج بيانات تاريخية",
  needs_iot: "يحتاج ربط آلات",
};

export function OpportunityGrid({ items }: { items: OpportunityCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.id} className="shadow-sm">
          <CardHeader>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{impactLabel[item.impact]}</Badge>
              <Badge variant="secondary">{difficultyLabel[item.difficulty]}</Badge>
              <Badge>{pilotLabel[item.pilotFit]}</Badge>
              {item.readiness ? <Badge variant="outline">{readyLabel[item.readiness]}</Badge> : null}
            </div>
            <CardTitle className="text-base">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
            <p>{item.summary}</p>
            <p>البيانات المطلوبة: {item.requiredData.join(" · ")}</p>
            <p>الاعتماديات: {item.dependencies.join(" · ")}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
