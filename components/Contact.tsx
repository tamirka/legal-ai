
import React from 'react';
import SectionCard from './SectionCard';

const Contact: React.FC = () => {
    return (
        <SectionCard id="contact" className="text-center !bg-gradient-to-br from-blue-100 to-indigo-100">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Empower Your Legal Team?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Discover how Legal AI Pro can be custom-tailored to your firm's unique needs. Contact us for a personalized demonstration and enterprise solutions.</p>
            <a href="mailto:info@legal-ai-pro.com" className="bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-500 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-blue-600 hover:to-sky-600 text-white font-bold py-4 px-12 md:py-5 md:px-16 rounded-full shadow-lg text-xl md:text-2xl inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-2xl">
                <i className="fas fa-envelope mr-4"></i> Request a Demo
            </a>
        </SectionCard>
    );
};

export default Contact;
