// Gemini embedding util for RAG pipeline
const GEMINI_EMBEDDING_MODEL = "models/gemini-embedding-exp-03-07";
const GEMINI_EMBEDDING_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-exp-03-07:embedContent`;

export async function getGeminiEmbedding(text: string): Promise<number[] | null> {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) throw new Error("Missing Gemini API Key");

  const body = {
    model: GEMINI_EMBEDDING_MODEL,
    content: { parts: [{ text }] }
  };

  const res = await fetch(`${GEMINI_EMBEDDING_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.embedding?.values ?? null;
}

export function cosineSimilarity(a: number[], b: number[]): number {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const normB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (normA * normB);
}
