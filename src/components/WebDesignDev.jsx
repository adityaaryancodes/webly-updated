import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const WebDesignDev = () => {
  return (
    <section id="web-design-dev" className="py-24 bg-slate-950 relative overflow-hidden min-h-screen">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-cyan-500/10 mb-6">
            <Globe className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Web Design & Development
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Create stunning, high-performance websites that drive business results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We build high-performance websites using modern technologies like React, Node.js, and next-generation frameworks. Every site is optimized for speed, SEO, and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {[
                  'Responsive Design for all devices',
                  'React-based interactive interfaces',
                  'Node.js backend for scalability',
                  'SEO optimization built-in',
                  'Fast loading speeds & performance',
                  'Modern UI/UX best practices'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technologies We Use</h3>
            <div className="space-y-4">
              {[
                { tech: 'React/Next', desc: 'Dynamic, interactive user interfaces' },
                { tech: 'Node.js', desc: 'Robust server-side applications' },
                { tech: 'Express.js/Fastify', desc: 'Fast, minimalist web framework' },
                { tech: 'JavaScript/TypeScript', desc: 'Modern, maintainable code' },
                { tech: 'Tailwind CSS', desc: 'Beautiful, responsive styling' },
                { tech: 'Vite', desc: 'Lightning-fast build tool' },
                { tech: 'PostgreSQL/MONGODB', desc: 'Reliable data management' },
                { tech: 'Vercel/AWS', desc: 'Enterprise-grade hosting' }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-cyan-500 pl-4">
                  <p className="text-white font-semibold">{item.tech}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
              { step: '02', title: 'Design', desc: 'Creating wireframes and visual mockups' },
              { step: '03', title: 'Development', desc: 'Building with clean, scalable code' },
              { step: '04', title: 'Launch & Support', desc: 'Deployment and ongoing optimization' }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-4">
                <p className="text-cyan-400 text-3xl font-bold mb-2">{item.step}</p>
                <p className="text-white font-semibold mb-2">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute -left-96 -top-96 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
      <div className="absolute -right-96 -bottom-96 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
    </section>
  );
};

export default WebDesignDev;
