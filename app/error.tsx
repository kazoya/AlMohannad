"use client";

import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <h1 className="text-2xl font-semibold">تعذّر عرض هذا الجزء</h1>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        حدث خطأ غير متوقع في واجهة العرض. يمكن إعادة المحاولة دون فقدان باقي المنصة.
      </p>
      <Button className="mt-6" onClick={reset}>
        إعادة المحاولة
      </Button>
    </div>
  );
}
