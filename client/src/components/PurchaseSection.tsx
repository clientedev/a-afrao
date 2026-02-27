import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { api } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { ShoppingBag, ArrowRight, ShieldCheck, Mail } from "lucide-react";

// Local schema matching the backend requirements
const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ser mais detalhada"),
});

type FormValues = z.infer<typeof formSchema>;

export function PurchaseSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const { mutate: submitInquiry, isPending } = useCreateInquiry();

  const onSubmit = (data: FormValues) => {
    submitInquiry(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="comprar" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
          
          {/* Purchase CTA Side */}
          <FadeIn direction="right">
            <div className="bg-primary/10 rounded-[2rem] p-8 md:p-12 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShoppingBag size={120} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Pronto para transformar sua pele?</h2>
                <p className="text-lg text-muted-foreground mb-8">Adquira agora o Sabonete de Açafrão e Dolomita Ecosopis e sinta a diferença do poder da natureza.</p>
                
                <div className="flex items-end gap-4 mb-8">
                  <span className="text-5xl font-bold text-foreground">R$ 25,00</span>
                  <span className="text-muted-foreground pb-2 font-medium">/ un (≈100g)</span>
                </div>

                <ul className="space-y-3 mb-10">
                  <li className="flex items-center text-foreground font-medium">
                    <ShieldCheck className="text-secondary mr-3 h-5 w-5" /> Compra 100% segura
                  </li>
                  <li className="flex items-center text-foreground font-medium">
                    <ShieldCheck className="text-secondary mr-3 h-5 w-5" /> Produto artesanal fresco
                  </li>
                </ul>

                <Button size="lg" className="w-full sm:w-auto text-lg h-16 px-10 rounded-full shadow-xl shadow-primary/30 hover:scale-105 transition-transform" onClick={() => alert("Redirecionando para checkout (Simulação)")}>
                  Comprar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form Side */}
          <FadeIn direction="left">
            <Card className="border-none shadow-xl shadow-black/5 bg-white">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Dúvidas? Fale conosco</h3>
                </div>
                <p className="text-muted-foreground mb-8">Preencha o formulário abaixo para revendas, dúvidas sobre o produto ou parcerias.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Nome completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" className="h-12 rounded-xl bg-background/50 border-border/60 focus:bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">E-mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" className="h-12 rounded-xl bg-background/50 border-border/60 focus:bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Sua mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Como podemos ajudar?" 
                              className="min-h-[120px] rounded-xl bg-background/50 border-border/60 focus:bg-white resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isPending} 
                      className="w-full h-12 rounded-xl text-base font-semibold"
                    >
                      {isPending ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
