import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  alt = "شعار المهند للصناعات البلاستيكية",
  priority = false,
}: {
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt={alt}
      width={400}
      height={160}
      className={cn("h-full w-full object-contain object-center", className)}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
