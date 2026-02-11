import { GoogleGenAI } from "@google/genai";

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Desculpe, meu sistema de comunicação está temporariamente indisponível (Chave API não configurada). Por favor, ligue para nós.";
    }

    // Get current date context to allow AI to make realistic suggestions
    const now = new Date();
    const dateContext = now.toLocaleString('pt-BR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    const SYSTEM_INSTRUCTION = `
Você é a assistente virtual inteligente da "Odonto Perse", uma clínica dentária de alto padrão.
Seu tom deve ser empático, profissional, acolhedor e direto.

CONTEXTO TEMPORAL ATUAL: Hoje é ${dateContext}.
HORÁRIO DE FUNCIONAMENTO: Segunda a Sexta (08:00 às 19:00) e Sábado (08:00 às 14:00). Domingo fechado.

Seus objetivos são:
1. Responder dúvidas básicas sobre tratamentos dentários.
2. Explicar a importância da saúde bucal.
3. FLUXO DE AGENDAMENTO (IMPORTANTE):
   - PASSO 1 (TRIAGEM): Antes de sugerir horários, você PRECISA saber qual o procedimento (ex: dor, avaliação, limpeza, lentes). Cada procedimento tem uma duração diferente. Se o usuário não disse o motivo, pergunte gentilmente: "Para verificarmos a disponibilidade correta, qual seria o tipo de atendimento (ex: avaliação, limpeza, dor)?"
   - PASSO 2 (OFERTA): Assim que souber o motivo (ou se o usuário já tiver informado na primeira mensagem), NÃO pergunte "que horário prefere?". Aja proativamente e OFEREÇA 2 opções concretas de horário para os próximos dias úteis.
   - Exemplo de oferta correta: "Para limpeza, tenho disponibilidade amanhã às 14h ou quinta às 09h. Algum desses funciona para você?"

Não forneça diagnósticos médicos definitivos. Use frases como "Isso pode indicar...".
Responda em português do Brasil. Mantenha as respostas concisas (máximo de 3 parágrafos curtos).
`;

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "Desculpe, não consegui entender. Poderia reformular?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tive um pequeno problema técnico. Por favor, tente novamente em instantes ou entre em contato pelo telefone.";
  }
};