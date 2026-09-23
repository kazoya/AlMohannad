"use client";

import { useState } from "react";
import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { fallbackKnowledgeAnswer, knowledgeAnswers, sampleQuestions } from "@/data/knowledge";
import type { KnowledgeAnswer } from "@/types";

export function KnowledgeAssistant() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<KnowledgeAnswer | null>(null);

  function ask(question: string) {
    const match = knowledgeAnswers.find((item) => item.question === question);
    setActive(match ?? { ...fallbackKnowledgeAnswer, question });
    setQuery(question);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title="مساعد معرفة المهند"
        description="يجيب من الدليل العام وهذا التصور. لا شهادة آيزو إن لم يوجد مصدر."
        demoLabel="مصدر عام أو اعتذار"
      />
      <HonestyNote>صفحات المنتجات الرقيقة تُعلن كناقصة بدل اختراع فرق بين كيدو وتشامبيون.</HonestyNote>
      <div className="flex flex-wrap gap-2">
        {sampleQuestions.map((question) => (
          <Button key={question} type="button" variant="outline" size="sm" className="cursor-pointer" onClick={() => ask(question)}>
            {question}
          </Button>
        ))}
      </div>
      <form
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          if (query.trim()) ask(query.trim());
        }}
      >
        <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="اسأل" aria-label="سؤال" />
        <Button type="submit" className="cursor-pointer">
          اسأل
        </Button>
      </form>
      {active ? (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{active.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-7">
            <p>{active.answer}</p>
            {active.citations.map((citation) => (
              <p key={citation.title} className="text-xs text-muted-foreground">
                {citation.title} — {citation.note}
              </p>
            ))}
          </CardContent>
        </Card>
      ) : null}
      <Accordion type="single" collapsible>
        <AccordionItem value="rag">
          <AccordionTrigger>كيف سيُبنى لاحقاً؟</AccordionTrigger>
          <AccordionContent className="text-sm leading-7 text-muted-foreground">
            تُفهرس حقائق الدليل العام ونصوص الآيزو الذاتي. كل إجابة تذكر المصدر. لا تعديل ادعاء غذائي من المحادثة.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
