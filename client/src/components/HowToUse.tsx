import { FadeIn } from "./FadeIn";
import closeUpImg from "@assets/image_1772190958351.png";

export function HowToUse() {
  const steps = [
    {
      num: "01",
      title: "Umedeça a pele",
      desc: "Durante o banho, aplique sobre a pele do rosto ou corpo já úmida."
    },
    {
      num: "02",
      title: "Massageie suavemente",
      desc: "Faça movimentos circulares até formar uma espuma cremosa e abundante."
    },
    {
      num: "03",
      title: "Deixe agir",
      desc: "Para maximizar os benefícios do açafrão e dolomita, aguarde no mínimo 3 minutos."
    },
    {
      num: "04",
      title: "Enxágue",
      desc: "Retire todo o produto com água abundante. Sinta a pele limpa e macia."
    }
  ];

  return (
    <section id="como-usar" className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <div className="rounded-full overflow-hidden border-8 border-white/10 shadow-2xl mx-auto max-w-[300px] lg:max-w-full aspect-square">
                <img 
                  src={closeUpImg} 
                  alt="Espuma cremosa sabonete" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 text-white">Como incluir na sua rotina</h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {steps.map((step, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-primary/40 pb-4">
                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white mt-1">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
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
