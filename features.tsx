import { Gauge, Shield, Headphones, Wifi, MonitorPlay, Gamepad2 } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Velocidad simétrica",
    description: "Misma velocidad de descarga y subida para una experiencia óptima en videollamadas y trabajo remoto.",
  },
  {
    icon: Shield,
    title: "Conexión segura",
    description: "Protección avanzada contra amenazas y filtrado de contenido para toda la familia.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Equipo técnico disponible las 24 horas, los 7 días de la semana para resolver cualquier problema.",
  },
  {
    icon: Wifi,
    title: "WiFi de última generación",
    description: "Routers WiFi 6 incluidos que garantizan cobertura en cada rincón de tu hogar.",
  },
  {
    icon: MonitorPlay,
    title: "Streaming sin cortes",
    description: "Disfruta de tus series y películas favoritas en 4K sin interrupciones ni buffering.",
  },
  {
    icon: Gamepad2,
    title: "Gaming sin lag",
    description: "Latencia ultra baja para una experiencia de juego online competitiva y fluida.",
  },
]

export function Features() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitas para estar conectado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnología de fibra óptica con los mejores servicios incluidos sin costo adicional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
