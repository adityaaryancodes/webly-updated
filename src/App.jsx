import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import About from './components/About';
import Contact from './components/Contact';
import WebDesignDev from './components/WebDesignDev';
import AppDevelopment from './components/AppDevelopment';
import WebMaintenance from './components/WebMaintenance';
import MarketingServices from './components/MarketingServices';
import BrandManagement from './components/BrandManagement';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <About />
      <WebDesignDev />
      <AppDevelopment />
      <WebMaintenance />
      <MarketingServices />
      <BrandManagement />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-8 bg-slate-900 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Webley Technologies. Innovating the Future.</p>
      </footer>
    </div>
  );
}

export default App;