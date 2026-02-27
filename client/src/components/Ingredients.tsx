import { FadeIn } from "./FadeIn";
import detail1Img from "@assets/image_1772190944755.png";
import { LeafyGreen } from "lucide-react";

export function Ingredients() {
  const ingredients = [
    {
      name: "Açafrão (Cúrcuma)",
      desc: "Conhecido por suas fortes propriedades clareadoras e anti-inflamatórias. Reduz a oleosidade e previne acne."
    },
    {
      name: "Dolomita",
      desc: "Rica em cálcio e magnésio, tem ação calmante, tonificante e ajuda no clareamento de manchas na pele."
    },
    {
      name: "Extrato de Barbatimão",
      desc: "Poderoso adstringente e cicatrizante natural, excelente para combater inflamações e tratar a foliculite."
    },
    {
      name: "Glicerina & Lauril Vegetal",
      desc: "Base 100% vegetal que limpa sem agredir, mantendo a hidratação natural e proporcionando espuma cremosa."
    }
  ];

  return (
    <section id="ingredientes" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute top-10 left-10 text-secondary/5 rotate-[-20deg] -z-10">
        <LeafyGreen size={200} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Puro e Verdadeiro</h2>
          <p className="text-lg text-muted-foreground">Composição limpa: sem essências artificiais, sem corantes sintéticos e livre de testes em animais.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            {ingredients.map((ing, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="bg-background rounded-2xl p-6 border border-border/50 hover:border-secondary/30 transition-colors">
                <h3 className="text-lg font-bold text-secondary mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                  {ing.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ing.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="left" className="relative h-full min-h-[400px]">
            <div className="absolute inset-0 rounded-[2rem] bg-secondary/10 translate-x-4 translate-y-4"></div>
            <img 
              src={detail1Img} 
              alt="Ingredientes Naturais" 
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-xl"
            />
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
