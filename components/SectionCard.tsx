
import React from 'react';

interface SectionCardProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ id, children, className = '' }) => {
    return (
        <section id={id} className={`bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-200 ${className}`}>
            {children}
        </section>
    );
};

export default SectionCard;
