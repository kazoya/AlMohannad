import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type KpiCardProps = {
  label: string;
  value: string | number;
  hint?: string;
  delta?: string;
  positive?: boolean;
};

export function KpiCard({ label, value, hint, delta, positive }: KpiCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="tabular text-2xl font-semibold">{typeof value === "number" ? formatNumber(value) : value}</p>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
          {delta ? <span className={cn(positive ? "text-emerald-700" : "text-muted-foreground")}>{delta}</span> : null}
          {hint ? <span className="text-muted-foreground">{hint}</span> : null}
        </div>
      </CardContent>
    </Card>
  );
}
