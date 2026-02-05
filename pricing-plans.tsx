import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    speed: "300 Mbps",
    price: "$2.499",
    description: "Ideal para uso diario y streaming",
    features: [
      "Descarga hasta 300 Mbps",
      "Subida hasta 150 Mbps",
      "WiFi Router incluido",
      "Instalación gratuita",
      "Soporte técnico 24/7",
    ],
    popular: false,
  },
  {
    name: "Óptimo",
    speed: "500 Mbps",
    price: "$3.499",
    description: "Perfecto para familias y gaming",
    features: [
      "Descarga hasta 500 Mbps",
      "Subida hasta 250 Mbps",
      "WiFi Router de alta gama",
      "Instalación gratuita",
      "Soporte técnico 24/7",
      "IP pública fija",
    ],
    popular: true,
  },
  {
    name: "Ultra",
    speed: "1 Gbps",
    price: "$4.999",
    description: "Máxima velocidad para profesionales",
    features: [
      "Descarga hasta 1 Gbps",
      "Subida hasta 500 Mbps",
      "WiFi 6 Router premium",
      "Instalación prioritaria",
      "Soporte técnico premium",
      "IP pública fija",
      "Sin límite de datos",
    ],
    popular: false,
  },
]

export function PricingPlans() {
  return (
    <section id="planes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Elige tu plan de internet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Planes flexibles que se adaptan a tus necesidades. Sin permanencia mínima ni costos ocultos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-card border-border ${
                plan.popular ? "border-primary ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-card-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.speed}</span>
                </div>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Contratar ahora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
