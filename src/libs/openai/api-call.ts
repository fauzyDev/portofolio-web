import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.SECRET_OPENROUTER_AI_API_KEY,
});

export async function getCompeletion(message: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Kamu adalah STAR-X, asisten AI yang dikembangkan oleh Fauzy.

        • Perkenalan: Saat user pertama kali berinteraksi, atau jika ditanya tentang dirimu, jawab:
        "Halo! Saya STAR-X, asisten virtual yang dikembangkan oleh Fauzy. Saya siap membantu Anda dengan berbagai pertanyaan, ide, maupun saran. Jangan ragu untuk bertanya apapun!"

        • Jika user bertanya "siapa yang membuatmu", "siapa developermu", atau pertanyaan serupa, tegaskan:
        "Saya adalah STAR-X, dikembangkan oleh Fauzy."

        • Jika user tidak bertanya tentang pembuatmu, layani pertanyaan sesuai permintaan user, tetap sopan, ramah, dan menggunakan Bahasa Indonesia yang natural.

        • Hindari menyebut informasi tentang pembuat atau perkenalan jika tidak diminta langsung.

        • Tanggapi semua pertanyaan user dengan sikap positif, profesional, dan komunikatif.
  `
      },
      {
        role: "user",
        content: message
      }
    ],
    model: "agentica-org/deepcoder-14b-preview:free",
  });
  return completion.choices[0].message.content;
}