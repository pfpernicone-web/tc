"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

export function CTASection() {
  const [address, setAddress] = useState("")

  return (
    <section id="cobertura" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 text-balance">
              Verifica si tenemos cobertura en tu zona
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
              Ingresa tu dirección y te confirmamos al instante si podemos llevarte la mejor conexión de internet.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Ingresa tu dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
              />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
              Verificar cobertura
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Buenos Aires</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Córdoba</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Rosario</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Mendoza</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span>Próximamente más zonas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
