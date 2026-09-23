"use client";

import { useMemo, useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatNumber } from "@/lib/format";

export function RoiCalculator() {
  const [distributors, setDistributors] = useState(12);
  const [cartons, setCartons] = useState(6);
  const [margin, setMargin] = useState(1.8);
  const [visits, setVisits] = useState(8);
  const [wage, setWage] = useState(12);
  const [pilot, setPilot] = useState(1800);
  const yearly = useMemo(
    () => distributors * cartons * margin * 10 + visits * wage * 40,
    [distributors, cartons, margin, visits, wage],
  );
  return (
    <div className="space-y-4">
      <HonestyNote>
        آلة توضيحية فقط. ليست أرباح المصنع الفعلية ولا تكلفة زيارة معتمدة.
      </HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        <Num label="موزّعون في التجريب" value={distributors} onChange={setDistributors} />
        <Num label="كراتين لكل جهة في الدورة" value={cartons} onChange={setCartons} />
        <Num label="هامش الكرتون (د.أ) — افتراض" value={margin} onChange={setMargin} />
        <Num label="زيارات تُختصر أسبوعياً بالأتمتة" value={visits} onChange={setVisits} />
        <Num label="تكلفة ساعة المبيعات" value={wage} onChange={setWage} />
        <Num label="تكلفة تجريب أولى (إعداد + تدريب)" value={pilot} onChange={setPilot} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">سيناريو تجريبي</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          أثر سنوي مفترض: <span className="tabular font-semibold">{formatNumber(yearly, 0)}</span> د.أ — استرداد تقريبي{" "}
          {yearly > 0 ? (pilot / (yearly / 12)).toFixed(1) : "—"} شهر
        </CardContent>
      </Card>
    </div>
  );
}

function Num({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input type="number" min={0} step="0.1" value={value} onChange={(e) => onChange(Number(e.target.value) || 0)} />
    </div>
  );
}
