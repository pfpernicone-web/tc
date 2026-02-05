"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Play } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo similar to Telecentro */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <Play className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-foreground ml-1">Telecentro</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#planes"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Planes
            </Link>
            <Link
              href="#beneficios"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Beneficios
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Preguntas frecuentes
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Ventas:{" "}
              <a href="tel:08001234567" className="text-primary font-medium hover:underline">
                0800-123-4567
              </a>
            </span>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contratar
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col gap-3 px-4">
              <Link
                href="#planes"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Planes
              </Link>
              <Link
                href="#beneficios"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="#faq"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Preguntas frecuentes
              </Link>
              <div className="pt-3 mt-2 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  Ventas:{" "}
                  <a href="tel:08001234567" className="text-primary font-medium">
                    0800-123-4567
                  </a>
                </p>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contratar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
