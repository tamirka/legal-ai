
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-10 px-6 bg-gray-900 text-gray-400 text-base rounded-b-3xl">
            <p>&copy; 2025 Legal AI Pro. All rights reserved.</p>
            <p className="mt-3">Built with <i className="fas fa-heart text-red-500 mx-1"></i> by your Digital Agency Partner.</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-linkedin fa-lg"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><i className="fas fa-globe fa-lg"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
