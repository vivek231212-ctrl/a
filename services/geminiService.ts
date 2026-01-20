
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDietaryInsight = async (userName: string, category: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest a short, catchy one-line personalized greeting and nutrition tip for ${userName} who is looking at ${category} food options. Keep it under 15 words.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
      },
    });
    return response.text || "Fuel your body with what matters most today!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Tap to see what's best for you";
  }
};
