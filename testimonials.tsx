import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martín García",
    role: "Diseñador Freelance - Palermo",
    content:
      "Trabajo desde casa y necesitaba internet que no se corte en videollamadas. Desde que tengo Telecentro no tuve ni un solo problema. La instalación fue en 2 días.",
    rating: 5,
  },
  {
    name: "Carolina Pérez",
    role: "Mamá de 3 - Belgrano",
    content:
      "Con 3 chicos en casa, todos conectados a la vez, pensé que sería imposible. Pero los 300 megas alcanzan para todo: clases, Netflix y gaming. Y el precio no cambió en 10 meses.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "Contador - Villa Urquiza",
    content:
      "Venía de otro proveedor donde pagaba más por menos velocidad. El cambio fue increíble. El técnico llegó puntual y en 30 minutos ya estaba conectado.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 lg:py-20 bg-secondary/50 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-12">
          <p className="text-primary font-medium mb-2 lg:mb-4 text-sm lg:text-base">Testimonios</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 lg:mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Más de 500.000 hogares ya eligieron Telecentro
          </p>
        </div>

        <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 lg:p-6 space-y-3 lg:space-y-4"
            >
              <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-primary/40" />
              <p className="text-sm lg:text-base text-foreground leading-relaxed">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex gap-0.5 lg:gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <div className="pt-3 lg:pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm lg:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
