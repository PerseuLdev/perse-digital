// TODO: Install @google/generative-ai package when ready to enable AI chat
// For now, using a mock response

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Simple mock response
  return "Thank you for your message! Our virtual assistant is under development. For now, please contact us via WhatsApp (11) 99999-9999 or phone (11) 3333-3333 to schedule your appointment.";
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
      return "Sorry, my communication system is temporarily unavailable. Please call us.";
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I had a technical problem. Please try again or contact us by phone.";
  }
};
*/
