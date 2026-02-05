"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Phone } from "lucide-react";
import { useState } from "react";

export function FinalCta() {
  const [telefono, setTelefono] = useState("");

  return (
    <section className="py-12 lg:py-20 bg-primary/10 border-y border-primary/20 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <div className="space-y-3 lg:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Listo para tener internet de verdad?
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dejá tu número y te llamamos en menos de 2 horas para coordinar la instalación
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Phone className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="Tu número de celular"
                className="h-12 lg:h-14 pl-10 lg:pl-12 text-base lg:text-lg bg-card border-border text-foreground placeholder:text-muted-foreground"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <Button
              size="lg"
              className="h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Llamame ahora
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs lg:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 lg:gap-2">
              <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500" />
              Sin compromiso
            </div>
            <div className="flex items-center gap-1.5 lg:gap-2">
              <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500" />
              Instalación en 48hs
            </div>
            <div className="flex items-center gap-1.5 lg:gap-2">
              <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500" />
              Precio congelado 12 meses
            </div>
          </div>

          {/* Pricing reminder */}
          <div className="bg-card border border-border rounded-xl lg:rounded-2xl p-4 lg:p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-xs lg:text-sm text-muted-foreground">Internet 300 Mbps</p>
                <p className="text-xl lg:text-2xl font-bold text-foreground">$12.999<span className="text-xs lg:text-sm font-normal text-muted-foreground">/mes</span></p>
              </div>
              <div className="text-right">
                <p className="text-xs lg:text-sm text-muted-foreground line-through">$20.999</p>
                <p className="text-primary font-semibold text-sm lg:text-base">38% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
