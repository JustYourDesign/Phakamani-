import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Questions
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-forest sm:text-5xl">
          Frequently asked questions
        </h2>
      </div>

      <Accordion className="mt-12 w-full">
        {faqs.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-border">
            <AccordionTrigger className="font-display text-xl tracking-wide text-forest hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-evergreen/70">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
