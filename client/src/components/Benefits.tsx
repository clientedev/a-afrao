import { FadeIn } from "./FadeIn";
import diagramImg from "@assets/image_1772190952603.png";
import { Sun, Activity, Zap, RefreshCw } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Activity,
      title: "Ação Anti-inflamatória",
      description: "Reduz a vermelhidão e acalma a pele irritada de forma natural."
    },
    {
      icon: Sun,
      title: "Uniformização do Tom",
      description: "O açafrão atua clareando manchas e trazendo luminosidade."
    },
    {
      icon: Zap,
      title: "Bactericida Poderoso",
      description: "Combate as bactérias causadoras da acne e foliculite."
    },
    {
      icon: RefreshCw,
      title: "Cicatrizante Natural",
      description: "Acelera a recuperação de pequenas lesões na pele."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={diagramImg} 
                alt="Benefícios do Sabonete" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-2xl font-medium text-balance">Sinergia pura para a saúde da sua pele.</p>
              </div>
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Transformação Visível e <span className="text-secondary italic">Natural</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Cada banho se torna um tratamento terapêutico. Nossos ingredientes foram cuidadosamente selecionados para entregar resultados reais.
              </p>

              <div className="space-y-8">
                {benefits.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-border flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                        <item.icon className="text-primary w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
