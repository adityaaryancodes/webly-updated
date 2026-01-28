import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Extreme Left */}
          <div className="flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-bold text-white tracking-tighter">
              WEBLEY<span className="text-cyan-400">.TECH</span>
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Get Started
              </button>
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
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
              Get Started
            </button>
          </div>
        </div>  
      )}
    </nav>
  );
};

export default Navbar;