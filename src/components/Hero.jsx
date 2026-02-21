import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headlineWords = ['We', 'Build', 'The'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      
      {/* Background Glow Effects */}
      <div className="hero-blob hero-blob-blue absolute -top-16 left-1/5 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-[128px]" />
      <div className="hero-blob hero-blob-purple absolute -bottom-20 right-1/5 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-sm font-semibold tracking-wide">
          INNOVATING DIGITAL SOLUTIONS
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          <span className="block">
            {headlineWords.map((word, index) => (
              <span
                key={word}
                className="hero-headline-word inline-block mr-4"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                {word}
              </span>
            ))}
          </span>
          <span
            className="hero-headline-word hero-shimmer inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"
            style={{ animationDelay: '440ms' }}
          >
            Digital Future
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Webley Technologies transforms businesses with next-gen Website Development, 
          AI-ready Apps, and Data-Driven Branding.
        </p>

        <div className="flex justify-center gap-6">
          <a href="#contact" className="hero-cta-primary group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center">
            Start Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="hero-cta-secondary px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
