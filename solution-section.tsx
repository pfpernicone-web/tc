import { Check, Zap, Shield, HeartHandshake } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Velocidad garantizada",
    description:
      "300 Mbps simétricos reales. Si no los tenés, te devolvemos el mes.",
    features: [
      "Fibra óptica hasta tu casa",
      "Sin límite de descarga",
      "Velocidad simétrica real",
    ],
  },
  {
    icon: Shield,
    title: "Precio congelado 12 meses",
    description:
      "El precio que ves es el que pagás. Sin aumentos sorpresa durante un año.",
    features: [
      "Sin cargos ocultos",
      "Factura clara y simple",
      "Descuento por débito automático",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Instalación express",
    description:
      "Te instalamos en 48hs con turno puntual de 2 horas. Respetamos tu tiempo.",
    features: [
      "Técnicos certificados",
      "Turno en horario exacto",
      "Configuración completa",
    ],
  },
];

export function SolutionSection() {
  return (
    <section className="py-12 lg:py-20 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-12">
          <p className="text-primary font-medium mb-2 lg:mb-4 text-sm lg:text-base">La solución</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 lg:mb-4 text-balance">
            Internet como debería ser
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Simple, rápido y sin sorpresas. Así de fácil.
          </p>
        </div>

        <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 lg:p-6 space-y-4 lg:space-y-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <solution.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <div className="space-y-1.5 lg:space-y-2">
                <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                  {solution.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground">{solution.description}</p>
              </div>
              <ul className="space-y-2 lg:space-y-3">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 lg:gap-3">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm lg:text-base text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
