import { ArrowLeft } from "lucide-react";

const steps = ["توصية المنصة", "مراجعة المبيعات", "الاعتماد", "التنفيذ"];

export function HumanInTheLoop({ note }: { note?: string }) {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <p className="mb-3 text-sm font-medium">القرار الحساس يبقى بشرياً</p>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full bg-primary/8 px-3 py-1 text-primary">{step}</span>
            {index < steps.length - 1 ? <ArrowLeft className="size-3.5 text-muted-foreground" aria-hidden /> : null}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-6 text-muted-foreground">
        {note ??
          "لا تُوقف دفعة، ولا تُعلن شهادة آيزو، ولا يُعتمد سعر جملة، ولا تُرسل رسالة لموزّع، دون اعتماد الجودة والمبيعات."}
      </p>
    </div>
  );
}
