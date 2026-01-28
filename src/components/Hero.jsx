import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-sm font-semibold tracking-wide">
          INNOVATING DIGITAL SOLUTIONS
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          We Build The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Digital Future
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Webley Technologies transforms businesses with next-gen Website Development, 
          AI-ready Apps, and Data-Driven Branding.
        </p>

        <div className="flex justify-center gap-6">
          <a href="#contact" className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center">
            Start Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;