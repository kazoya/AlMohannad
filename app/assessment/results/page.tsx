"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STORAGE_KEY, defaultAssessment, summarizeAssessment, type AssessmentValues } from "@/lib/assessment";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}
function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) ?? "";
}
function getServerSnapshot() {
  return "";
}
function parse(raw: string): AssessmentValues {
  if (!raw) return defaultAssessment;
  try {
    return { ...defaultAssessment, ...JSON.parse(raw) };
  } catch {
    return defaultAssessment;
  }
}

export default function AssessmentResultsPage() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const values = parse(raw);
  const summary = summarizeAssessment(values);
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="ملخص التقييم" description="من هذا المتصفح فقط." demo={false} />
      <HonestyNote>الحقول الفارغة تبقى غير معروفة.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">
            {summary.filled} من {summary.total} ({summary.pct}٪)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
          <p>الخطوط: {values.lines || "غير محدد"}</p>
          <p>مصدر الحليب: {values.milkSource || "غير محدد"}</p>
          <p>سجلات البسترة/التبريد: {values.processRecords || "غير محدد"}</p>
          <p>قنوات الطلب: {values.orderChannels.join(" · ") || "غير محدد"}</p>
          <p>مسار الآيزو: {values.isoPath || "غير محدد"}</p>
          <p>تقييم سابق: {values.previousAudit || "غير محدد"}</p>
          <p>ملاحظات: {values.notes || "لا شيء"}</p>
        </CardContent>
      </Card>
      <Button asChild className="cursor-pointer">
        <Link href="/assessment">تعديل</Link>
      </Button>
    </div>
  );
}
