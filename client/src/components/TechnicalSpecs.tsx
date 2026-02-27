import { FadeIn } from "./FadeIn";
import { CheckCircle2, ShieldPlus, Leaf, Droplets, HeartPulse, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TechnicalSpecs() {
  const specs = [
    {
      title: "Principais Ações",
      value: "Anti-inflamatória, bactericida e cicatrizante.",
      icon: ShieldPlus,
      color: "text-secondary"
    },
    {
      title: "Tratamento",
      value: "Auxilia na redução de foliculite e inflamações.",
      icon: HeartPulse,
      color: "text-destructive"
    },
    {
      title: "Indicação",
      value: "Uso no rosto e corpo. Todos os tipos de pele.",
      icon: Droplets,
      color: "text-blue-500"
    },
    {
      title: "Propriedades",
      value: "Ativos de origem natural e fragrância suave.",
      icon: Leaf,
      color: "text-secondary"
    },
    {
      title: "Peso & Formato",
      value: "≈100g. Pode haver variação por ser artesanal.",
      icon: CheckCircle2,
      color: "text-foreground"
    }
  ];

  return (
    <section id="ficha-tecnica" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Ficha Técnica</h2>
          <p className="text-muted-foreground">Conheça os detalhes que fazem do nosso sabonete a escolha ideal para a sua rotina de autocuidado.</p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specs.map((spec, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-all h-full group bg-background/50 hover:bg-white">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className={`p-3 rounded-xl bg-white shadow-sm border border-border/50 mb-4 group-hover:-translate-y-1 transition-transform ${spec.color}`}>
                    <spec.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{spec.value}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
