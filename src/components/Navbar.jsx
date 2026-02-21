import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import weblyLogo from '../assets/WhatsApp Image 2026-02-21 at 11.31.12.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Extreme Left */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3">
            <img
              src={weblyLogo}
              alt="Webly Tech logo"
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-white tracking-tighter">
              Webly<span className="text-cyan-400"> Tech</span>
            </span>
          </div>

          {/* Spacer - Takes up all available space */}
          <div className="flex-1"></div>

          {/* Desktop Menu - Extreme Right */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white hover:text-shadow-glow transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] inline-block"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="px-6 sm:px-8 pt-2 pb-3 space-y-1">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all block text-center"
            >
              Get Started
            </a>
          </div>
        </div>  
      )}
    </nav>
  );
};

export default Navbar;
