import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/image_1772191028565.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Produto", href: "#produto" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Ingredientes", href: "#ingredientes" },
    { name: "Como Usar", href: "#como-usar" },
    { name: "Ficha Técnica", href: "#ficha-tecnica" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-10 flex items-center">
            {/* Using logo-invert utility defined in index.css since background is light */}
            <img 
              src={logoImg} 
              alt="Ecosopis Logo" 
              className="h-10 w-auto logo-invert object-contain" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <a href="#comprar">Comprar Agora</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-background flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-serif font-medium text-foreground hover:text-primary"
          >
            {link.name}
          </a>
        ))}
        <Button 
          asChild 
          size="lg" 
          className="rounded-full mt-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <a href="#comprar">Comprar Agora</a>
        </Button>
      </div>
    </header>
  );
}
