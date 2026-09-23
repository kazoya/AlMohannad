import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { salesScripts } from "@/data/scripts";

export default function HaccpPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="نقاط HACCP"
        description="الاستلام، البسترة، التعبئة، التبريد. الاقتراح يظهر — الإيقاف بشري."
      />
      <HonestyNote>لا خريطة نقاط حقيقية من المصنع بعد. الأسماء تجريبية للشرح.</HonestyNote>
      <div className="grid gap-3 md:grid-cols-2">
        {salesScripts
          .filter((s) => s.audience.includes("موزّع") || s.audience.includes("الجودة"))
          .map((script) => (
            <Card key={script.id}>
              <CardHeader>
                <CardTitle className="text-base">{script.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                <p>{script.opener}</p>
              </CardContent>
            </Card>
          ))}
      </div>
      <SalesCallBar extra="HACCP — أرسل لي نقاط التحكم الحقيقية" />
    </div>
  );
}
