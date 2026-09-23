import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type DemoBadgeProps = {
  label?: string;
  className?: string;
};

export function DemoBadge({ label = "بيانات تجريبية", className }: DemoBadgeProps) {
  return (
    <Badge variant="outline" className={cn("border-copper/40 bg-copper/8 text-[0.7rem] font-medium text-copper", className)}>
      {label}
    </Badge>
  );
}

export function HonestyNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/50 px-3 py-2 text-sm leading-7 text-muted-foreground">
      {children}
    </div>
  );
}
