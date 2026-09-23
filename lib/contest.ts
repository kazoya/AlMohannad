import type { QualityLot, QualityProposal } from "@/types";

export const DEVIATION_ESCALATION_THRESHOLD = 80;
export const LOW_READING_THRESHOLD = 8;

export function proposeQualityAction(lot: QualityLot): QualityProposal {
  if (lot.deviationSignals >= DEVIATION_ESCALATION_THRESHOLD && lot.status !== "نشطة") {
    return {
      lotId: lot.id,
      action: "escalate",
      recommendation:
        lot.type === "حليب"
          ? "اقتراح إيقاف الدفعة حتى إعادة بسترة واعتماد جودة"
          : "اقتراح حجر التعبئة ومراجعة سجل الحموضة",
      reasons: [
        `سُجّل ${lot.deviationSignals} إشارة انحراف تجريبية — فوق عتبة ${DEVIATION_ESCALATION_THRESHOLD}.`,
        "لا يُوقف خط ولا تُتلف دفعة إلا بعد اعتماد بشري.",
      ],
      requiresApproval: true,
    };
  }
  if (lot.coolingReading < LOW_READING_THRESHOLD) {
    return {
      lotId: lot.id,
      action: "recheck",
      recommendation: "إعادة فحص سلسلة التبريد: القراءة أقل من الحد التجريبي",
      reasons: [
        `آخر قياس تبريد تجريبي ${lot.coolingReading} — أقل من الحد.`,
        "الرسالة تُقترح هنا، والإرسال يبقى بشرياً من واتساب الجودة.",
      ],
      requiresApproval: true,
    };
  }
  return {
    lotId: lot.id,
    action: "monitor",
    recommendation: "الاستمرار في الرصد دون إيقاف هذا اليوم",
    reasons: ["القراءات التجريبية ضمن المدى. لا إجراء مبكر حتى لا تُفرَّغ وردية الإنتاج."],
    requiresApproval: true,
  };
}
