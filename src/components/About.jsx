import React from 'react';
import { ArrowRight } from 'lucide-react';
import aboutImage from '../assets/about.avif';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Where Vision Meets Reality
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Webley Technologies is a digital innovation and technology consulting company delivering AI-driven solutions, cloud platforms, and custom software development for modern enterprises.
              </p>
              
              <p>
                From legacy system modernisation and cloud migration to Generative AI solutions, AI automation, and enterprise application development, we design and build technology that drives measurable business outcomes.
              </p>
              
              <p>
                Whether you're migrating mission-critical workloads to the cloud, deploying AI chatbots and CX automation or an e-commerce platform, our engineering-first approach ensures performance, compliance, and long-term growth at every stage of your digital journey.
              </p>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Side - Enhanced Certifications Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl opacity-75" />
              
              {/* Image Container with Dark Background */}
              <div className="relative bg-slate-950 border-2 border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                <img 
                  src={aboutImage} 
                  alt="Certifications and Badges" 
                  className="w-full h-auto block"
                  style={{ display: 'block' }}
                />
              </div>
              
              {/* Corner Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute -left-96 -top-96 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      <div className="absolute -right-96 -bottom-96 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
    </section>
  );
};

export default About;
