import { faqData } from '@/lib/data/faq'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Common questions about our HVAC equipment, building materials, wholesale pricing, and delivery across the UAE.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-muted-foreground">
            Have more questions? Call us at{' '}
            <a href="tel:+97165220089" className="text-blue-600 underline hover:text-blue-700 transition-colors">
              +971 6 522 0089
            </a>
            , WhatsApp{' '}
            <a href="tel:+971568880263" className="text-blue-600 underline hover:text-blue-700 transition-colors">
              +971 56 888 0263
            </a>
            , or email{' '}
            <a href="mailto:info@alegaby.com" className="text-blue-600 underline hover:text-blue-700 transition-colors">
              info@alegaby.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
