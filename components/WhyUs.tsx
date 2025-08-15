
import React from 'react';
import SectionCard from './SectionCard';

const FeatureItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start text-left">
        <i className={`fas ${icon} text-4xl mr-6 text-blue-600 w-10 text-center`}></i>
        <div>
            <h3 className="font-bold text-2xl mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-700 text-lg">{children}</p>
        </div>
    </div>
);

const WhyUs: React.FC = () => {
    return (
        <SectionCard id="why-us">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center">
                <i className="fas fa-handshake-angle text-blue-600 mr-4"></i> Why Professionals Choose Legal AI Pro
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
                <FeatureItem icon="fa-tachometer-alt" title="Unmatched Efficiency & Speed">
                    Drastically reduce research time. Our AI processes vast amounts of legal data in seconds, delivering precise answers that would take hours manually. Focus on strategy, not searching.
                </FeatureItem>
                <FeatureItem icon="fa-shield-alt" title="Superior Accuracy & Relevance">
                    Leverage a model fine-tuned on your proprietary legal documents, ensuring responses are not just accurate, but deeply relevant to your specific practice area and internal knowledge base.
                </FeatureItem>
                <FeatureItem icon="fa-dollar-sign" title="Cost-Effective Legal Research">
                    Minimize expenses associated with traditional legal research platforms and extensive manual labor. Get high-quality insights at a fraction of the cost.
                </FeatureItem>
                <FeatureItem icon="fa-lock" title="Enterprise-Grade Security & Privacy">
                    Your data is your most valuable asset. Our SaaS solution ensures your proprietary information remains secure and private, with robust data handling protocols and access controls.
                </FeatureItem>
            </div>
        </SectionCard>
    );
};

export default WhyUs;
