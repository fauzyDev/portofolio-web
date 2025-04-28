import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.SECRET_OPENROUTER_AI_API_KEY,
});

export async function getCompeletion(message: string) {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "user",
                content: message
            }
        ],
        model: "agentica-org/deepcoder-14b-preview:free",
    });
    return completion.choices[0].message.content;
}