import Link from "next/link";
import { Play, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and contact */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Play className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-card-foreground">Telecentro</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Internet de fibra óptica para hogares en Argentina. Velocidad real, precio justo, sin sorpresas.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:08001234567"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                0800-123-4567
              </a>
              <a
                href="mailto:ventas@telecentro.com.ar"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                ventas@telecentro.com.ar
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Defensa del consumidor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Estado del servicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Mi cuenta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Telecentro. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Precio válido para nuevas altas. Consulte condiciones.
          </p>
        </div>
      </div>
    </footer>
  );
}
