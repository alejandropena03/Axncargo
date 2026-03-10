import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const prompts = [
  {
    filename: 'hero.png',
    prompt: "Tech Luxe cinematic, deep blacks, charcoal grays, polished steel, icy blue light. Vista de gran angular de un puerto de carga en Toronto durante la 'hora azul'. Grúas automatizadas de alta tecnología cargando contenedores negros mate con el logo de AXN en plata. Al fondo, la silueta sutil de una ciudad moderna. Reflejos de luz LED en el agua. Estilo fotorrealista, 8k, lentes anamórficos, atmósfera de solidez y grandeza."
  },
  {
    filename: 'industrial.png',
    prompt: "Tech Luxe cinematic, deep blacks, charcoal grays, polished steel, icy blue light. Primer plano detallado de maquinaria pesada para la industria del petróleo siendo asegurada con cadenas de acero brillante dentro de un avión de carga. Iluminación técnica que resalta la ingeniería y el cuidado del detalle. Tonos metálicos fríos. Transmite eficiencia radical y conocimiento experto."
  },
  {
    filename: 'vehiculos.png',
    prompt: "Tech Luxe cinematic, deep blacks, charcoal grays, polished steel, icy blue light. Un SUV eléctrico de última generación y un vehículo clásico de colección, ambos impecables, posicionados simétricamente dentro de un almacén logístico de lujo con piso de resina brillante. Personal con tabletas analizando datos de exportación. Foco en la seguridad y el manejo profesional de activos de alto valor."
  },
  {
    filename: 'mudanzas.png',
    prompt: "Tech Luxe cinematic, deep blacks, charcoal grays, polished steel, icy blue light. Bodega de carga organizada con cajas de mudanza premium etiquetadas hacia 'Destino: LATAM'. Entre las cajas, se ve la parte trasera de un vehículo familiar protegido. La luz entra de forma cálida pero profesional, simbolizando la confianza y el inicio de una nueva vida respaldada por un aliado experto."
  },
  {
    filename: 'valores.png',
    prompt: "Tech Luxe cinematic, deep blacks, charcoal grays, polished steel, icy blue light. Primer plano de una mano humana interactuando con una interfaz holográfica de mapas de ruta logísticos sobre un fondo de naturaleza canadiense desenfocada (bosques de Alberta). Fusión entre tecnología 'Data Driven' y compromiso de sostenibilidad ambiental. Estilo elegante, minimalista y vanguardista."
  }
];

async function generateImage(promptStr: string, filename: string) {
  try {
    console.log(`Generating ${filename}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: promptStr }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });
    
    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          fs.writeFileSync(path.join(process.cwd(), 'public', filename), Buffer.from(base64Data, 'base64'));
          console.log(`Saved ${filename}`);
          return;
        }
      }
    }
    console.log(`No image data found for ${filename}`);
  } catch (e) {
    console.error(`Error generating ${filename}:`, e);
  }
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  for (const item of prompts) {
    await generateImage(item.prompt, item.filename);
  }
}

main();
