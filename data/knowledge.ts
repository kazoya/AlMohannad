import type { KnowledgeAnswer } from "@/types";

export const knowledgeSeedQuestions = [
  "هل للشركة موقع رسمي؟",
  "ما الذي نعرفه من السجل العام؟",
  "هل أنتم معتمدون آيزو؟",
];

export const sampleQuestions = knowledgeSeedQuestions;

export const fallbackKnowledgeAnswer: KnowledgeAnswer = {
  id: "fallback",
  question: "",
  answer:
    "لا إجابة من مصدر معتمد داخل هذا التصور. نعتذر بدل الاختراع. اسأل الجودة أو المبيعات.",
  citations: [{ title: "قاعدة الصدق", note: "المصدر أو الاعتذار" }],
};

export const knowledgeAnswers: KnowledgeAnswer[] = [
  {
    id: "k1",
    question: "هل للشركة موقع رسمي؟",
    answer:
      "في هذا الفحص لم يظهر موقع رسمي. المصدر العام المستخدم هو دليل الأردن، وغاياته صناعة الألبان ومشتقاتها في عمّان منذ 2007.",
    citations: [{ title: "دليل الأردن", note: "صفحة الشركة بلا هاتف وبلا بريد" }],
  },
  {
    id: "k2",
    question: "ما الذي نعرفه من السجل العام؟",
    answer:
      "تأسيس 18 كانون الثاني 2007، عمّان، صناعة ألبان ومشتقاتها واستيراد آلات ومواد خام. الدوام في الدليل أحد–خميس 9–5.",
    citations: [{ title: "دليل الأردن", note: "جدول الغايات وساعات العمل" }],
  },
  {
    id: "k3",
    question: "هل أنتم معتمدون آيزو؟",
    answer:
      "لا شهادة سارية نُشرت في المصدر العام. المنصة تقدّم تقييماً ذاتياً ISO 22000 / HACCP / 9001 بأسلوب APCA: إتمام لا اعتماد مانح.",
    citations: [{ title: "هذا التصور", note: "صفحة تقييم الآيزو — بيانات الدفعات تجريبية" }],
  },
];
