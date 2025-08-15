
// This is a Vercel Edge Function, which is a modern, fast, and secure backend.
// It acts as a proxy to the OpenAI API.

// You can configure the runtime to be 'edge' or 'nodejs'. 
// Edge is faster, but nodejs has better compatibility with some libraries.
export const config = {
  runtime: 'edge',
};

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// The system instruction is kept on the backend for security and consistency.
const systemInstruction = `You are a highly knowledgeable legal expert specializing in corporate law, contract law, and intellectual property. Provide concise, accurate, and professional advice, citing general legal principles where applicable. Do not provide specific legal advice that would constitute a lawyer-client relationship, and always include a disclaimer that the information is for informational purposes only and not a substitute for professional legal counsel.`;


// This is the main function that will be executed when a request is made to /api/generate.
export default async function handler(request: Request) {
  // 1. Ensure this is a POST request.
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Only POST requests are allowed' }), { status: 405 });
  }

  // 2. Get the user's prompt from the request body.
  const { prompt } = await request.json();
  if (!prompt) {
    return new Response(JSON.stringify({ error: 'Prompt is required' }), { status: 400 });
  }

  // 3. Get the API key securely from environment variables.
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key is not configured on the server' }), { status: 500 });
  }

  // 4. Call the OpenAI API from the secure backend.
  try {
    const openaiResponse = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo',
        messages: [
          { role: 'system', content: systemInstruction },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 1500,
      })
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      console.error("OpenAI API Error:", errorData);
      return new Response(JSON.stringify({ error: errorData.error?.message || 'OpenAI API request failed' }), { status: openaiResponse.status });
    }

    const data = await openaiResponse.json();
    const insight = data.choices[0]?.message?.content?.trim();

    if (!insight) {
      return new Response(JSON.stringify({ error: 'Received an empty response from the AI' }), { status: 500 });
    }

    // 5. Send the successful response back to the frontend.
    return new Response(JSON.stringify({ insight: insight }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Internal Server Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return new Response(JSON.stringify({ error: `Internal Server Error: ${errorMessage}` }), { status: 500 });
  }
}
