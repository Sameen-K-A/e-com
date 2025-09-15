import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/constants/defaultFAQs";

export default function FAQSection() {
  return (
    <div className="container p-4 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">FAQs</h2>
        <p className="text-muted-foreground text-sm">
          Questions you might ask about our products and services.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full space-y"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-border/50"
          >
            <AccordionTrigger className="text-sm">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}