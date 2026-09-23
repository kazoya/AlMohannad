"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { qualityLots } from "@/data/contests";
import { getWhatsAppUrl } from "@/lib/config";
import { proposeQualityAction } from "@/lib/contest";

export function QualityReviewBoard() {
  const [selected, setSelected] = useState(qualityLots[0]?.id ?? "");
  const lot = useMemo(
    () => qualityLots.find((item) => item.id === selected) ?? qualityLots[0],
    [selected],
  );
  const proposal = lot ? proposeQualityAction(lot) : null;

  return (
    <div className="space-y-4">
      <HonestyNote>
        أسماء الدفعات والأرقام تجريبية لتوضيح آلية HACCP. لا يُوقف خط حقيقي من هذا اللوح. التقييم ذاتي على طريقة APCA — ليس شهادة آيزو.
      </HonestyNote>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">الدفعات تحت الرصد</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {qualityLots.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item.id)}
                className={`flex w-full cursor-pointer flex-col rounded-xl border px-3 py-3 text-right text-sm ${
                  item.id === selected ? "border-gold bg-accent" : "hover:border-gold/40"
                }`}
              >
                <span className="font-medium">{item.name}</span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {item.type} · {item.city} · {item.deviationSignals} إشارة CCP · قراءة تبريد {item.coolingReading}
                </span>
              </button>
            ))}
          </CardContent>
        </Card>
        {lot && proposal ? (
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                <Badge>{lot.status}</Badge>
                <Badge variant="outline">
                  {proposal.action === "escalate"
                    ? "إيقاف مقترح"
                    : proposal.action === "recheck"
                      ? "إعادة فحص"
                      : "رصد فقط"}
                </Badge>
              </div>
              <CardTitle className="text-base">{lot.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7">
              <p>المسؤول: {lot.coordinator}</p>
              <p className="font-medium text-foreground">{proposal.recommendation}</p>
              <ul className="list-disc space-y-1 pr-4 text-muted-foreground">
                {proposal.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => toast.success("اقتراح معلّق بانتظار اعتماد الجودة — لم يُوقف شيء")}
                >
                  اعتماد بشري
                </Button>
                <Button type="button" variant="outline" className="cursor-pointer" onClick={() => toast.message("رُفض الإيقاف — استمرار الرصد")}>
                  رفض الإيقاف
                </Button>
                <Button asChild variant="secondary" className="cursor-pointer">
                  <a href={getWhatsAppUrl(`جودة دفعة ${lot.name}`)} target="_blank" rel="noreferrer">
                    واتساب الجودة
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : null}
      </div>
      <HumanInTheLoop note="إيقاف الدفعة قرار جودة بشري. المنصة تقترح فقط، كما في تقييم APCA الذاتي: إتمام لا اعتماد مانح." />
      <SalesCallBar extra="شاهدت منصة الآيزو للمثالية وأريد جولة جودة هذا الأسبوع" />
    </div>
  );
}
