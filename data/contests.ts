import type { QualityLot } from "@/types";

export const qualityLots: QualityLot[] = [
  {
    id: "s1",
    name: "دفعة حليب صباحي — خزّان 1",
    type: "حليب",
    city: "عمّان",
    deviationSignals: 126,
    coolingReading: 14,
    coordinator: "م. جودة",
    status: "جاهزة للإيقاف",
  },
  {
    id: "s2",
    name: "دفعة لبنة — خط التعبئة",
    type: "لبنة",
    city: "عمّان",
    deviationSignals: 91,
    coolingReading: 9,
    coordinator: "مشرف الإنتاج",
    status: "بانتظار الاعتماد",
  },
  {
    id: "s3",
    name: "استلام حليب خام — صهريج أ",
    type: "حليب",
    city: "عمّان",
    deviationSignals: 44,
    coolingReading: 4,
    coordinator: "استلام",
    status: "نشطة",
  },
  {
    id: "s4",
    name: "تبريد توزيع — سيارة 3",
    type: "لبنة",
    city: "عمّان",
    deviationSignals: 67,
    coolingReading: 11,
    coordinator: "لوجستيات",
    status: "نشطة",
  },
];

export const qualityFramework = [
  {
    title: "ISO 22000",
    text: "نظام إدارة سلامة الغذاء. هنا تقييم ذاتي على نقاط التحكم، وليس شهادة مانحة. نفس فلسفة أكاديمية APCA: إتمام وتقييم، لا اعتماد رسمي.",
  },
  {
    title: "HACCP",
    text: "كل دفعة تمر على نقاط حرجة: حرارة الاستلام، البسترة، التعبئة، التبريد. الانحراف يُقترح إيقافاً — التنفيذ يبقى بشرياً.",
  },
  {
    title: "ISO 9001",
    text: "وثائق الإجراءات وسجلات الشكاوى. إن لم تكن موجودة رقمياً نعلنها «غير معروفة» لا نلفّقها.",
  },
  {
    title: "العتبة التجريبية",
    text: "عند تجاوز عتبة انحرافات CCP (تجريبياً 80 في هذا النموذج) يُقترح إيقاف الدفعة. الاقتراح يظهر لمدير الجودة ولا يُنفَّذ قبل اعتماده.",
  },
  {
    title: "البيع",
    text: "الآيزو هنا أداة إغلاق صفقة توزيع: المشتري يرى سلسلة تبريد واضحة ويتصل واتساب. ليس بوست شهادة مزوّرة.",
  },
];
