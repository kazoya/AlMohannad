import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <h1 className="text-2xl font-semibold">الصفحة غير موجودة</h1>
      <p className="mt-3 text-sm text-muted-foreground">قد يكون الرابط تغيّر داخل هذا التصور.</p>
      <Button asChild className="mt-6">
        <Link href="/">العودة للرئيسية</Link>
      </Button>
    </div>
  );
}
