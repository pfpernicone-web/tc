import { XCircle, Wifi, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Wifi,
    title: "Internet lento en hora pico",
    description:
      "Cuando todos están conectados, tu internet se arrastra. Las videollamadas se cortan y Netflix carga eternamente.",
  },
  {
    icon: Clock,
    title: "Técnicos que nunca llegan",
    description:
      "Pedís un turno y te dan una ventana de 4 horas. Perdés medio día de trabajo esperando.",
  },
  {
    icon: DollarSign,
    title: "Precios que suben sin avisar",
    description:
      "Cada mes la factura viene más cara. Aumentos sorpresa que nadie te explicó.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-12 lg:py-20 bg-secondary/50 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-12">
          <p className="text-primary font-medium mb-2 lg:mb-4 text-sm lg:text-base">El problema</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 lg:mb-4 text-balance">
            Cansado de tu proveedor de internet actual?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Sabemos lo frustrante que es. Por eso creamos algo diferente.
          </p>
        </div>

        <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 lg:p-6 space-y-3 lg:space-y-4"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <problem.icon className="w-5 h-5 lg:w-6 lg:h-6 text-red-500" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
