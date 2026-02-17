// TODO: Install @google/generative-ai package when ready to enable AI chat
// For now, using a mock response

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Simple mock response
  return "Obrigado pela sua mensagem! Nosso assistente virtual está em desenvolvimento. Por enquanto, entre em contato pelo WhatsApp (11) 99999-9999 ou telefone (11) 3333-3333 para agendar sua consulta.";
};

/*
TODO: Implement real Gemini integration
1. Install: npm install @google/generative-ai
2. Add API_KEY to .env.local
3. Uncomment the implementation below

import { GoogleGenerativeAI } from "@google/generative-ai";

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return "Desculpe, meu sistema de comunicação está temporariamente indisponível. Por favor, ligue para nós.";
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tive um problema técnico. Por favor, tente novamente ou entre em contato pelo telefone.";
  }
};
*/
