import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage() {
  try {
    console.log(`Generating form-image.png...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: "Tech Luxe cinematic, deep blacks, charcoal grays, polished steel, icy blue light. Una mano profesional sosteniendo una pluma estilográfica de lujo sobre una tableta digital transparente donde se ven flujos de datos logísticos abstractos. El ambiente es una oficina de alta dirección en Toronto. Transmite la idea de: 'Usted nos cuenta su necesidad, nosotros escribimos la solución'. Estilo minimalista, limpio y de alto valor." }],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4"
        }
      }
    });
    
    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          fs.writeFileSync(path.join(process.cwd(), 'public', 'form-image.png'), Buffer.from(base64Data, 'base64'));
          console.log(`Saved form-image.png`);
          return;
        }
      }
    }
    console.log(`No image data found`);
  } catch (e) {
    console.error(`Error generating image:`, e);
  }
}

generateImage();
