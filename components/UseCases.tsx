
import React from 'react';
import SectionCard from './SectionCard';

const UseCaseItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="p-6 bg-slate-50/50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 h-full">
        <div className="text-blue-500 text-4xl mb-4"><i className={`fas ${icon}`}></i></div>
        <h4 className="font-bold text-xl mb-2 text-gray-800">{title}</h4>
        <p className="text-gray-700">{children}</p>
    </div>
);

const UseCases: React.FC = () => {
    return (
        <SectionCard id="use-cases">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center">
                <i className="fas fa-briefcase text-blue-600 mr-4"></i> Practical Applications for Your Practice
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <UseCaseItem icon="fa-file-contract" title="Contract Analysis & Drafting">
                    Quickly identify clauses, summarize agreements, and draft initial contract sections with AI assistance.
                </UseCaseItem>
                <UseCaseItem icon="fa-balance-scale" title="Case Law Research">
                    Rapidly find relevant precedents, analyze case outcomes, and understand legal arguments.
                </UseCaseItem>
                <UseCaseItem icon="fa-clipboard-check" title="Compliance & Regulatory Checks">
                    Stay updated on complex regulations and ensure your documents and practices are compliant.
                </UseCaseItem>
                <UseCaseItem icon="fa-users-cog" title="Client Advisory Support">
                    Generate quick, informed responses to client queries based on your firm's accumulated knowledge.
                </UseCaseItem>
                <UseCaseItem icon="fa-chart-line" title="Market & Industry Analysis">
                    Gain insights into legal trends, market shifts, and competitive landscapes relevant to your specialization.
                </UseCaseItem>
                <UseCaseItem icon="fa-graduation-cap" title="Legal Training & Onboarding">
                    Accelerate learning for new associates by providing an interactive knowledge base of firm expertise.
                </UseCaseItem>
            </div>
        </SectionCard>
    );
};

export default UseCases;
