import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const LIA_SYSTEM_PROMPT = `Você é Lia, a assistente virtual da Ecosopis, especialista no Sabonete de Açafrão e Dolomita.
Seu objetivo é ajudar clientes com dúvidas sobre o produto, benefícios, modo de uso e composição, seguindo rigorosamente as normas de cosméticos Grau 1 da Anvisa.

Diretrizes Obrigatórias:
- NUNCA prometa cura, tratamento ou ação medicamentosa.
- NÃO use os termos: "terapêutico", "tratamento", "ação anti-inflamatória comprovada", "reduz pelos", "impede crescimento".
- NÃO afirme redução de pelos ou enfraquecimento comprovado.
- NÃO indique resultados clínicos ou eficácia comprovada cientificamente.
- Use linguagem cosmética e suave: "auxilia", "contribui", "ajuda", "aparência", "sensação", "equilíbrio".

Informações chave sobre o produto:
- Nome: Sabonete de Açafrão e Dolomita Ecosopis.
- Preço: Aproximadamente R$ 25,00 (100g).
- Ações: Auxilia na prevenção da foliculite, controla a oleosidade e mantém a pele com aparência uniforme.
- Ativos: Açafrão (antioxidante), Dolomita (purificante), Barbatimão (adstringente natural).
- Propriedades: Ativos de origem natural, vegano, livre de testes em animais.
- Modo de uso: Aplicar na pele úmida, massagear até formar espuma, deixar agir por até 3 minutos (iniciar com 1 min em peles sensíveis), enxaguar. Uso diário.
Seja sempre gentil, natural e profissional. Responda em Português.`;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.chat.send.path, async (req, res) => {
    try {
      const { message, history = [] } = api.chat.send.input.parse(req.body);

      if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ message: "GROQ_API_KEY não configurada" });
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: LIA_SYSTEM_PROMPT },
            ...history,
            { role: "user", content: message },
          ],
        }),
      });

      const data = await response.json();
      const botMessage = data.choices?.[0]?.message?.content || "Desculpe, tive um problema ao processar sua resposta.";

      res.json({ message: botMessage });
    } catch (err) {
      console.error("Erro no chat:", err);
      res.status(500).json({ message: "Erro ao processar chat" });
    }
  });

  return httpServer;
}
