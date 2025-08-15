
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AiInteraction from './components/AiInteraction';
import WhyUs from './components/WhyUs';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-slate-700">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3),_0_15px_30px_-10px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col">
            <Header />
            <main className="p-10">
                <AiInteraction />
                <hr className="my-16 border-slate-200" />
                <WhyUs />
                <hr className="my-16 border-slate-200" />
                <UseCases />
                <hr className="my-16 border-slate-200" />
                <Testimonials />
                <hr className="my-16 border-slate-200" />
                <Contact />
            </main>
            <Footer />
        </div>
    </div>
  );
};

export default App;
