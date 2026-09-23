import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { readiness } from "@/data/readiness";

const ar = {
  unknown: "غير معروف",
  yes: "نعم",
  partial: "جزئي",
  no: "لا",
};

export default function ReadinessPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="جاهزية البيانات" description="ما يظهر للزائر وما يبقى داخلياً غير معروف." demo={false} />
      <HonestyNote>العمود «غير معروف» ليس نقصاً في المنصة — هو حدود المصدر العلني.</HonestyNote>
      <div className="overflow-x-auto rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المصدر</TableHead>
              <TableHead>موجود</TableHead>
              <TableHead>رقمي</TableHead>
              <TableHead>منظّم</TableHead>
              <TableHead>عمق</TableHead>
              <TableHead>واجهة</TableHead>
              <TableHead>جاهزية الذكاء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {readiness.map((row) => (
              <TableRow key={row.source}>
                <TableCell>{row.source}</TableCell>
                <TableCell>{ar[row.exists]}</TableCell>
                <TableCell>{ar[row.digital]}</TableCell>
                <TableCell>{ar[row.structured]}</TableCell>
                <TableCell>{row.historicalDepth}</TableCell>
                <TableCell>{ar[row.api]}</TableCell>
                <TableCell>{row.aiReadiness}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
