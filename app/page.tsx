import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Truck,
  UserCheck,
} from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { HonestyNote } from "@/components/shared/demo-badge";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Button } from "@/components/ui/button";
import { getCompanyWebsiteUrl, getWhatsAppUrl, siteConfig } from "@/lib/config";

const executiveView = [
  "مسار الدفعة من الاستلام إلى التسليم",
  "نقاط القرار البشري عند أي انحراف",
  "تقييم جاهزية مبني على ما هو معروف فعلاً",
  "خطوة تالية واضحة للمبيعات والجودة",
];

const valueCards = [
  {
    icon: ShieldCheck,
    title: "جودة قابلة للشرح",
    text: "حوّل السجلات والإجراءات إلى رحلة قصيرة يفهمها الموزّع، من دون ادعاء شهادة غير منشورة.",
    href: "/quality",
  },
  {
    icon: Snowflake,
    title: "سلسلة تبريد مرئية",
    text: "اعرض نقاط القياس والمسؤولية من الخزان إلى مركبة التوزيع والرف، مع إبقاء القرار للإنسان.",
    href: "/reuse",
  },
  {
    icon: ClipboardCheck,
    title: "تشخيص يبدأ الآن",
    text: "اجمع المعلومات الناقصة في تقييم محلي قصير، ثم استبدل البيانات التجريبية بواقع المصنع.",
    href: "/assessment",
  },
];

const traceSteps = [
  { icon: Thermometer, title: "الاستلام", text: "مصدر الحليب ودرجة الحرارة" },
  { icon: ShieldCheck, title: "المعالجة", text: "البسترة ونقاط التحكم" },
  { icon: PackageCheck, title: "الإفراج", text: "اعتماد الجودة قبل الشحن" },
  { icon: Truck, title: "التوزيع", text: "التبريد حتى نقطة التسليم" },
];

export default function HomePage() {
  const sourceUrl = getCompanyWebsiteUrl();
  const whatsappUrl = getWhatsAppUrl("أرغب في مناقشة تصور الجودة وسلسلة التبريد للمصنع");

  return (
    <div className="landing-surface -mx-4 -mt-6 px-4 py-6 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <section className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-primary/15 bg-primary text-primary-foreground shadow-[0_24px_80px_-36px_rgba(20,38,63,0.85)] lg:grid-cols-[1.35fr_0.65fr]">
        <div className="relative px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold to-transparent" />
          <div className="animate-brand-rise flex items-center gap-3">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-gold/60 bg-white p-1.5 shadow-lg">
              <BrandLogo alt={siteConfig.nameAr} priority />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-gold">{siteConfig.nameAr}</p>
              <p className="mt-0.5 text-[11px] text-primary-foreground/60">تصور رقمي مستقل · عمّان، الأردن</p>
            </div>
          </div>

          <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-gold">جودة × مبيعات × سلسلة تبريد</p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-bold text-balance sm:text-4xl lg:text-[2.9rem] lg:leading-[1.45]">
            حوّل جودة مصنع الألبان من ملفات داخلية إلى قصة يثق بها الموزّع
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-primary-foreground/78 sm:text-base">
            نموذج عملي يربط رحلة الدفعة، نقاط سلامة الغذاء، وسلسلة التبريد في واجهة واحدة تساعد الإدارة على اكتشاف الفجوات وبدء حوار مهني مع العملاء.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {whatsappUrl ? (
              <Button asChild size="lg" className="cursor-pointer bg-ochre text-primary shadow-md hover:bg-gold">
                <a href={whatsappUrl}>
                  <MessageCircle /> ناقش التصور عبر واتساب
                </a>
              </Button>
            ) : null}
            <Button asChild size="lg" variant="outline" className="cursor-pointer border-white/35 bg-white/5 text-white hover:bg-white/12 hover:text-white">
              <Link href="/assessment">
                ابدأ تشخيص الجاهزية <ArrowLeft />
              </Link>
            </Button>
          </div>

          <a href={sourceUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-xs text-primary-foreground/60 underline-offset-4 hover:text-gold hover:underline">
            <ExternalLink className="size-3.5" /> المصدر العام المتاح عن الشركة
          </a>
        </div>

        <div className="border-t border-white/10 bg-white/[0.055] p-6 sm:p-8 lg:border-t-0 lg:border-r lg:p-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold">ما الذي يراه المدير خلال 3 دقائق؟</p>
          <ul className="mt-6 space-y-4">
            {executiveView.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-primary-foreground/85">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-gold/25 bg-black/10 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <UserCheck className="size-4 text-gold" /> قرار بشري محفوظ
            </div>
            <p className="mt-2 text-xs leading-6 text-primary-foreground/65">
              المنصة تقترح وتنبّه؛ اعتماد الدفعة والسعر والادعاء الغذائي يبقى بيد المسؤول المختص.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="value-title" className="mx-auto mt-10 max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-copper">القيمة التنفيذية</p>
          <h2 id="value-title" className="mt-2 font-heading text-2xl font-bold sm:text-3xl">ابدأ بما يمكن إثباته، ثم ابنِ عليه</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">ثلاثة مداخل مختصرة بدل إغراق الزائر في عشرات الشاشات منذ اللحظة الأولى.</p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {valueCards.map(({ icon: Icon, title, text, href }) => (
            <Link key={href} href={href} className="group rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-copper">استكشف <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="trace-title" className="mx-auto mt-10 max-w-6xl rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-copper">رحلة الدفعة</p>
            <h2 id="trace-title" className="mt-2 font-heading text-2xl font-bold">أربع محطات يفهمها الموزّع والجودة معًا</h2>
          </div>
          <Button asChild variant="outline" className="w-fit cursor-pointer">
            <Link href="/workflow">افتح المسار التفصيلي <ArrowLeft /></Link>
          </Button>
        </div>
        <ol className="mt-7 grid gap-3 md:grid-cols-4">
          {traceSteps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="relative rounded-2xl border border-primary/10 bg-background/65 p-4">
              <div className="flex items-center justify-between gap-3">
                <Icon className="size-5 text-copper" />
                <span className="tabular text-xs font-semibold text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-4 font-heading font-semibold">{title}</h3>
              <p className="mt-1 text-xs leading-6 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-8 max-w-6xl">
        <HonestyNote>
          هذه المنصة تصور رقمي مستقل وليست الموقع الرسمي للشركة. بيانات التشغيل والأصناف داخلها أمثلة للنقاش، ولا توجد فيها شهادة آيزو أو نتيجة تدقيق صادرة عن جهة مانحة.
        </HonestyNote>
      </section>

      <section className="mx-auto mt-6 max-w-6xl">
        <SalesCallBar extra="أرغب في جلسة قصيرة لمراجعة تصور الجودة وسلسلة التبريد" />
      </section>
    </div>
  );
}
