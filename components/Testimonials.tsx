
import React from 'react';
import SectionCard from './SectionCard';

const Testimonials: React.FC = () => {
    return (
        <SectionCard id="testimonials" className="!bg-blue-50/50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-xl shadow-md border border-blue-200">
                    <p className="text-lg italic text-gray-700 mb-4">"Legal AI Pro has revolutionized our due diligence process. The speed and accuracy are simply unparalleled. A game-changer for our corporate law practice!"</p>
                    <p className="font-semibold text-blue-700">- Sarah L., Senior Partner at Apex Legal Group</p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-md border border-blue-200">
                    <p className="text-lg italic text-gray-700 mb-4">"Integrating our internal documents with Legal AI Pro has created an invaluable knowledge base. Our team now finds answers in minutes, not hours. Highly recommended!"</p>
                    <p className="font-semibold text-blue-700">- David M., Head of IP Law at Innovate Corp.</p>
                </div>
            </div>
        </SectionCard>
    );
};

export default Testimonials;
