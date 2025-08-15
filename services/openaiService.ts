
/**
 * Calls our secure backend API route to get a legal insight.
 * @param promptText The legal query from the user.
 * @returns A promise that resolves to the AI's response as a string.
 */
export async function getLegalInsight(promptText: string): Promise<string> {
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: promptText })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("API Route Error:", errorData);
            throw new Error(errorData.error || `Request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data.insight;

    } catch (error) {
        console.error("Error calling backend API:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        throw new Error(`Failed to get a response. (Details: ${errorMessage})`);
    }
}
