import { useState, useRef, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, User, Bot, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function PurchaseSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Olá! Sou Lia, sua assistente virtual da Ecosopis. Como posso ajudar você hoje com nosso Sabonete de Açafrão e Dolomita?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await apiRequest("POST", "/api/chat", {
        message: userMessage,
        history: messages.slice(-5) // Send last few messages for context
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível falar com a Lia no momento."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="comprar" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Purchase CTA Side */}
          <FadeIn direction="right">
            <div className="bg-primary/10 rounded-[2rem] p-8 md:p-12 border border-primary/20 relative overflow-hidden h-full flex flex-col justify-center">
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

          {/* Chat Interface Side */}
          <FadeIn direction="left">
            <Card className="border-none shadow-2xl bg-white overflow-hidden flex flex-col h-[600px]">
              <CardHeader className="bg-primary text-primary-foreground p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif">Lia</CardTitle>
                    <p className="text-xs opacity-80">Assistente Virtual Ecosopis</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0 flex flex-col bg-background/30">
                <ScrollArea className="flex-1 p-6" viewportRef={scrollRef}>
                  <div className="space-y-4">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl flex items-start space-x-2 ${
                          msg.role === "user" 
                            ? "bg-primary text-primary-foreground rounded-tr-none" 
                            : "bg-white text-foreground shadow-md rounded-tl-none"
                        }`}>
                          <div className="mt-1">
                            {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                          </div>
                          <p className="text-sm leading-relaxed">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                <div className="p-4 bg-white border-t">
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="flex space-x-2"
                  >
                    <Input 
                      placeholder="Tire suas dúvidas com a Lia..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={isLoading}
                      className="flex-1 border-primary/20 rounded-full h-12 px-6"
                    />
                    <Button 
                      type="submit" 
                      size="icon" 
                      disabled={isLoading || !input.trim()}
                      className="rounded-full w-12 h-12 shrink-0"
                    >
                      <Send size={18} />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
