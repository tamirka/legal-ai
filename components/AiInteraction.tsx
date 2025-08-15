import React, { useState, useCallback } from 'react';
import SectionCard from './SectionCard';
import Spinner from './Spinner';
import { getLegalInsight } from '../services/openaiService';

const AiInteraction: React.FC = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copy');

    const handleCopy = useCallback(() => {
        if (!response) return;
        navigator.clipboard.writeText(response).then(() => {
            setCopyButtonText('Copied!');
            setTimeout(() => setCopyButtonText('Copy'), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }, [response]);

    const handleSubmit = async () => {
        if (!query.trim()) {
            setError("Please enter a legal question.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setResponse('');
        setCopyButtonText('Copy');

        try {
            const aiResponse = await getLegalInsight(query);
            setResponse(aiResponse);
        } catch (err) {
            const e = err as Error;
            setError(e.message || "An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SectionCard id="ask-ai">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center justify-center text-center">
                <i className="fas fa-search-dollar text-blue-600 mr-4"></i> Get Instant Legal Insights
            </h2>
            <div className="mb-8">
                <label htmlFor="questionInput" className="block text-gray-700 text-xl md:text-2xl font-semibold mb-4">Your Legal Query:</label>
                <textarea 
                    id="questionInput"
                    className="w-full p-6 border border-gray-300 rounded-xl focus:outline-none text-gray-800 shadow-sm transition-all duration-300 ease-in-out focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 min-h-[160px] resize-y"
                    rows={6}
                    placeholder="e.g., 'What are the compliance requirements for GDPR regarding data anonymization for a SaaS company?'"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            <div className="flex justify-center mb-10">
                <button 
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-500 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-blue-600 hover:to-sky-600 text-white font-bold py-4 px-12 md:py-5 md:px-16 rounded-full shadow-lg text-xl md:text-2xl flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <span className="mr-3">Processing...</span>
                            <Spinner />
                        </>
                    ) : (
                        <span>Analyze & Advise</span>
                    )}
                </button>
            </div>
            <div className="group relative bg-slate-100 border-l-[6px] border-blue-500 p-8 rounded-xl min-h-[300px] shadow-inner">
                {response && (
                    <button onClick={handleCopy} className="absolute top-4 right-4 bg-slate-300 text-slate-600 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:bg-slate-400 hover:text-white">
                        <i className={`fas ${copyButtonText === 'Copied!' ? 'fa-check' : 'fa-copy'} mr-2`}></i>
                        {copyButtonText}
                    </button>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 flex items-center">
                    <i className="fas fa-lightbulb text-blue-600 mr-4"></i> AI-Generated Legal Insight
                </h3>
                <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
                    {response ? response : 
                        <span className="text-gray-500">
                            Your AI-powered legal insights will appear here. Our AI is trained to provide comprehensive, context-aware responses, helping you navigate complex legal landscapes with confidence.
                        </span>
                    }
                </div>
                {error && <div className="text-red-600 font-medium mt-6 text-base">{error}</div>}
                 <p className="text-xs text-gray-600 mt-10 italic border-t border-gray-300 pt-6">
                    Disclaimer: The information provided by Legal AI Pro is for informational purposes only and does not constitute legal advice. It is not a substitute for professional legal counsel. Always consult with a qualified attorney for advice on specific legal issues.
                </p>
            </div>
        </SectionCard>
    );
};

export default AiInteraction;