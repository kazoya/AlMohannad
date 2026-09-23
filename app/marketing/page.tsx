import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { salesScripts } from "@/data/scripts";
import { getWhatsAppUrl } from "@/lib/config";

export default function MarketingPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        eyebrow="Close the call"
        title="رسائل تُقنع في مكالمة واحدة"
        description="نصوص جاهزة لمدير المبيعات. قصيرة، قابلة للتطبيق، وبلا ادعاءات أو إنجازات غير موثقة."
        demo={false}
      />
      <HonestyNote>
        قوة الجملة في التكرار الصادق: الدفعة تُرصد، التبريد يُعرض، والآيزو تقييم ذاتي لا ختم مزوّر. أي مبالغة دولية تُحذف.
      </HonestyNote>
      {salesScripts.map((script) => (
        <Card key={script.id} className="shadow-sm">
          <CardHeader>
            <p className="text-xs text-copper">{script.audience}</p>
            <CardTitle className="text-base">{script.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-7">
            <p>
              <span className="font-medium">الافتتاح: </span>
              {script.opener}
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">الدليل: </span>
              {script.proof}
            </p>
            <p>
              <span className="font-medium">الطلب: </span>
              {script.ask}
            </p>
            <a
              className="inline-block text-sm text-copper underline-offset-4 hover:underline"
              href={getWhatsAppUrl(`${script.audience} — ${script.title}`)}
              target="_blank"
              rel="noreferrer"
            >
              إرسال مسودة عبر واتساب المبيعات
            </a>
          </CardContent>
        </Card>
      ))}
      <SalesCallBar extra="رسائل المبيعات — أريد تدريب المندوبين على هذه الجمل" />
    </div>
  );
}
