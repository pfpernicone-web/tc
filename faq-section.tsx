"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Cuánto demora la instalación?",
    answer:
      "Instalamos en 48 horas hábiles. Te damos un turno de 2 horas para no hacerte perder tiempo. Si llegamos tarde, te bonificamos el primer mes.",
  },
  {
    question: "El precio va a aumentar?",
    answer:
      "El precio queda congelado por 12 meses desde tu alta. Después de ese período, cualquier ajuste te lo comunicamos con 30 días de anticipación.",
  },
  {
    question: "Hay permanencia o contrato?",
    answer:
      "No hay permanencia mínima. Podés darte de baja cuando quieras sin costo ni penalidad. Solo pedimos avisar con 10 días de anticipación.",
  },
  {
    question: "Qué pasa si el internet no funciona bien?",
    answer:
      "Garantizamos los 300 Mbps. Si tenés problemas, un técnico te visita en 24hs. Si no podemos solucionarlo, te devolvemos el mes completo.",
  },
  {
    question: "Qué incluye Telecentro Play?",
    answer:
      "Telecentro Play incluye más de 100 canales en vivo, series y películas on demand. Funciona en celular, tablet, Smart TV y computadora. Los primeros 6 meses son gratis.",
  },
  {
    question: "Cómo es la velocidad en hora pico?",
    answer:
      "Nuestra fibra óptica es dedicada, no compartida. Esto significa que tenés los 300 Mbps las 24 horas, sin importar cuántos vecinos estén conectados.",
  },
];

export function FaqSection() {
  return (
    <section className="py-12 lg:py-20 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <p className="text-primary font-medium mb-2 lg:mb-4 text-sm lg:text-base">Preguntas frecuentes</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 lg:mb-4 text-balance">
              Resolvé tus dudas
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 lg:px-6"
              >
                <AccordionTrigger className="text-left text-sm lg:text-base text-foreground hover:text-primary hover:no-underline py-4 lg:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-base text-muted-foreground pb-4 lg:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
