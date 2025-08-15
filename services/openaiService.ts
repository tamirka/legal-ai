// This check ensures that the API key is available.
// In a real-world scenario, this would be handled by the environment setup.
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set. Please ensure it is configured.");
}

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// The system instruction is crucial for simulating the "fine-tuned" behavior.
// It makes the base model act like a specialized legal expert.
const systemInstruction = `You are a highly knowledgeable legal expert specializing in corporate law, contract law, and intellectual property. Provide concise, accurate, and professional advice, citing general legal principles where applicable. Do not provide specific legal advice that would constitute a lawyer-client relationship, and always include a disclaimer that the information is for informational purposes only and not a substitute for professional legal counsel.`;

/**
 * Calls the OpenAI API to get a legal insight based on the user's query.
 * @param promptText The legal query from the user.
 * @returns A promise that resolves to the AI's response as a string.
 */
export async function getLegalInsight(promptText: string): Promise<string> {
    try {
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo', // Using a powerful model suitable for legal analysis
                messages: [
                    {
                        role: 'system',
                        content: systemInstruction
                    },
                    {
                        role: 'user',
                        content: promptText
                    }
                ],
                temperature: 0.7,
                top_p: 0.9,
                max_tokens: 1500, // Generous token limit for detailed legal insights
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("OpenAI API Error:", errorData);
            throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const insight = data.choices[0]?.message?.content?.trim();

        if (!insight) {
            throw new Error("Received an empty response from the AI.");
        }

        return insight;

    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        // Re-throw a user-friendly error message that can be displayed in the UI.
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        throw new Error(`Failed to get a response from the AI. Please check your connection or API key and try again. (Details: ${errorMessage})`);
    }
}