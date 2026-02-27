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
  const isMounted = useRef(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      scrollElement.scrollTo({
        top: scrollElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isLoading]);

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
        <div className="max-w-3xl mx-auto">

          {/* Chat Interface - Centered and Full Width in its container */}
          <FadeIn direction="up" className="h-full">
            <Card className="border-none shadow-2xl bg-white overflow-hidden flex flex-col h-[600px] w-full max-h-[85vh]">
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
                        <div className={`max-w-[80%] p-4 rounded-2xl flex items-start space-x-2 ${msg.role === "user"
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
