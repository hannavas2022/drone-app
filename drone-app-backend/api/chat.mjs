import { CohereClientV2 } from 'cohere-ai';
import { faqData } from './faqData.mjs';

if (!process.env.CO_API_KEY) {
    console.error('❌ CO_API_KEY is missing! Please set it.');
    process.exit(1);
}

const cohere = new CohereClientV2({
    token: process.env.CO_API_KEY,
});

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { message } = req.body || {};

        if (!message) {
            return res.status(400).json({ error: 'Missing message in request body' });
        }

        const faqText = faqData
            .map(item => `Q: ${item.question}\nA: ${item.answer}`)
            .join('\n\n');

        // Створюємо історію чату з системною підказкою
        const messages = [
            {
                role: 'system',
                content: `You are a helpful assistant with access to the following FAQ information:\n\n${faqText}\n\nOnly answer questions based on this FAQ.`,
            },
            {
                role: 'user',
                content: message,
            },
        ];

        const response = await cohere.chat({
            model: 'command-r-plus', 
            messages: messages,
        });

        const reply = response.message?.content?.[0]?.text?.trim();

        res.status(200).json({ reply });
    } catch (error) {
        console.error('Cohere error:', error);
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
}
