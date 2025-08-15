
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center py-12 px-8 bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-t-3xl shadow-xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">Legal AI Pro</h1>
            <p className="text-xl md:text-3xl font-light opacity-90">Unlock Unrivaled Legal Intelligence with Custom AI</p>
            <nav className="mt-8 flex justify-center space-x-4 md:space-x-6">
                <a href="#ask-ai" className="text-white text-base md:text-lg font-medium hover:text-blue-200 transition-colors duration-200">Ask AI</a>
                <a href="#why-us" className="text-white text-base md:text-lg font-medium hover:text-blue-200 transition-colors duration-200">Why Us</a>
                <a href="#use-cases" className="text-white text-base md:text-lg font-medium hover:text-blue-200 transition-colors duration-200">Use Cases</a>
                <a href="#contact" className="text-white text-base md:text-lg font-medium hover:text-blue-200 transition-colors duration-200">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
