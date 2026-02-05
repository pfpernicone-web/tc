"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Check, Wifi, Tv, Gift, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    codigoArea: "011",
    telefono: "",
  });

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 py-8 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:items-center w-full">
          {/* Left: Value proposition */}
          <div className="space-y-6 lg:space-y-8 order-1 w-full">
            {/* Urgency badge */}
            <div className="flex justify-start w-full">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap">
                Oferta por tiempo limitado
              </Badge>
            </div>

            {/* Main headline - Benefit focused */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Internet que{" "}
                <span className="text-primary">nunca se corta</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                300 Megas de fibra óptica para que trabajes, estudies y veas series sin interrupciones.
              </p>
            </div>

            {/* Price anchor */}
            <div className="bg-card border border-border rounded-xl lg:rounded-2xl p-4 lg:p-6 space-y-3 lg:space-y-4 w-full">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-muted-foreground line-through text-base lg:text-lg">$20.999</span>
                <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                  -38% OFF
                </Badge>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">$12.999</span>
                <span className="text-muted-foreground text-sm lg:text-base">/mes</span>
              </div>
              <p className="text-xs lg:text-sm text-muted-foreground">Precio final con impuestos incluidos</p>
              
              {/* What's included */}
              <div className="pt-3 lg:pt-4 border-t border-border space-y-2 lg:space-y-3">
                <p className="font-semibold text-foreground text-sm lg:text-base">Incluye sin costo adicional:</p>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Wifi className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm lg:text-base">Router WiFi 6 de última generación</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Tv className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm lg:text-base">Telecentro Play gratis por 6 meses</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm lg:text-base">Instalación gratuita en 48hs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social proof - Hidden on mobile, shown in form instead */}
            <div className="hidden lg:flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">+2.500</strong> clientes este mes
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.8/5 en Google</span>
              </div>
            </div>
          </div>

          {/* Right: Lead form */}
          <div className="w-full order-2 lg:pl-8 max-w-full">
            <div className="bg-card border border-border rounded-xl lg:rounded-2xl p-5 lg:p-8 shadow-2xl shadow-primary/5 w-full">
              <div className="space-y-4 lg:space-y-6">
                <div className="text-center space-y-1 lg:space-y-2">
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                    Contratá ahora y activamos en 48hs
                  </h2>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    Dejá tus datos y te llamamos en menos de 2 horas
                  </p>
                </div>

                <form className="space-y-3 lg:space-y-4">
                  <div>
                    <Input
                      placeholder="Nombre y Apellido"
                      className="h-11 lg:h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu email"
                      className="h-11 lg:h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select
                      value={formData.codigoArea}
                      onValueChange={(value) =>
                        setFormData({ ...formData, codigoArea: value })
                      }
                    >
                      <SelectTrigger className="w-20 lg:w-24 h-11 lg:h-12 bg-secondary border-border text-foreground text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="011">011</SelectItem>
                        <SelectItem value="0223">0223</SelectItem>
                        <SelectItem value="0351">0351</SelectItem>
                        <SelectItem value="0341">0341</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                        15
                      </span>
                      <Input
                        type="tel"
                        placeholder="Número sin el 15"
                        className="h-11 lg:h-12 pl-9 lg:pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                        value={formData.telefono}
                        onChange={(e) =>
                          setFormData({ ...formData, telefono: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 lg:h-14 text-base lg:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Quiero Internet ya
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                {/* Trust signals */}
                <div className="pt-3 lg:pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-2 lg:gap-4 text-xs lg:text-sm">
                    <div className="flex items-center gap-1.5 lg:gap-2 text-muted-foreground">
                      <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500 flex-shrink-0" />
                      Sin permanencia
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2 text-muted-foreground">
                      <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500 flex-shrink-0" />
                      Cancelás cuando quieras
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2 text-muted-foreground">
                      <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500 flex-shrink-0" />
                      Precio sin sorpresas
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2 text-muted-foreground">
                      <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500 flex-shrink-0" />
                      Soporte 24/7
                    </div>
                  </div>
                </div>

                {/* Urgency */}
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 lg:p-4 text-center">
                  <p className="text-xs lg:text-sm text-primary font-medium">
                    <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline mr-1.5 lg:mr-2" />
                    Te llamamos en menos de 2 horas
                  </p>
                </div>

                {/* Mobile social proof */}
                <div className="flex lg:hidden items-center justify-center gap-1 pt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.8/5 en Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
