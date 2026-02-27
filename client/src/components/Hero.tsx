import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@assets/image_1772190939960.png";

export function Hero() {
  return (
    <section id="produto" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <FadeIn direction="up">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-border/50 px-3 py-1 rounded-full text-xs font-semibold text-primary mb-6">
                <Sparkles size={14} />
                <span>100% Natural e Vegano</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 text-balance">
                Sabonete de <span className="text-primary italic">Açafrão</span> e Dolomita – Pele uniforme e livre de foliculite
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
                Cuidado natural para a sua pele. Uma sinergia perfeita entre a natureza e o bem-estar, auxiliando no tratamento de foliculite.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all h-14 px-8 text-base">
                  <a href="#comprar">
                    Converse com a Lia <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base border-primary/20 hover:bg-primary/5">
                  <a href="#beneficios">Conhecer Benefícios</a>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn direction="left" delay={0.2} className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border-[8px] border-white z-10">
              <img 
                src={heroImg} 
                alt="Sabonete de Açafrão e Dolomita Ecosopis" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-black/5 border border-border/50 z-20 flex items-center space-x-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">✨</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Feito à Mão</p>
                <p className="text-xs text-muted-foreground">Qualidade Artesanal</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
