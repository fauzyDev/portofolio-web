import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.SECRET_OPENROUTER_AI_API_KEY,
});

export async function getCompeletion() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Kamu model dibuat oleh siapa?" }],
        model: "agentica-org/deepcoder-14b-preview:free",
    });

    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
}