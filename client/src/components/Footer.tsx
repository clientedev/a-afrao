import logoImg from "/logo.png";
import { Instagram, Mail, MapPin, ExternalLink, ShoppingCart, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/80 pt-16 pb-8 border-t-[6px] border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logoImg} alt="Ecosopis" className="h-14 w-auto mb-6 object-contain" />
            <p className="text-sm text-center md:text-left max-w-xs leading-relaxed text-white/60">
              Cosméticos artesanais feitos com amor, respeito à natureza e foco em resultados reais para a sua pele.
            </p>
          </div>

          {/* Links Col */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-serif font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-center md:text-left">
              <li><a href="#produto" className="hover:text-primary transition-colors">Sobre o Produto</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#ingredientes" className="hover:text-primary transition-colors">Ingredientes</a></li>
              <li><a href="#como-usar" className="hover:text-primary transition-colors">Como Usar</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-serif font-bold text-white mb-6">Contato e Redes</h4>
            <ul className="space-y-4 text-sm text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start">
                <Globe size={16} className="text-primary mr-3" />
                <a href="https://www.ecosopis.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.ecosopis.com.br</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Instagram size={16} className="text-primary mr-3" />
                <a href="https://instagram.com/ecosopis" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@ecosopis</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <ShoppingCart size={16} className="text-primary mr-3" />
                <a href="https://shopee.com.br/ecosopisnaturais" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Loja Shopee</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail size={16} className="text-primary mr-3" />
                contato@ecosopis.com.br
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ecosopis Cosméticos Artesanais. Todos os direitos reservados.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
