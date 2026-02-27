import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const toolLogos = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
  { name: 'Express.js', logo: 'https://cdn.simpleicons.org/express/FFFFFF' },
  { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/00C7B7' },
  { name: 'Django', logo: 'https://cdn.simpleicons.org/django/44B78B' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    wide: true
  }
];

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

          <div className="relative overflow-hidden border border-cyan-500/25 rounded-2xl min-h-[430px] bg-slate-900/40">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/webly-tech.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/45 to-cyan-950/35" />

            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
             
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">TOOLS WE USE</h3>
              <p className="text-slate-100/85 text-sm mb-6 max-w-lg">
                React, Next.js, Express.js, FastAPI, Django and the complete stack we use to build
                fast, scalable products.
              </p>

              <div className="tools-marquee mb-5 bg-slate-900/55 backdrop-blur-sm" aria-label="Technology logos in motion">
                <div className="tools-track">
                  {[0, 1].map((copyIndex) => (
                    <div
                      key={copyIndex}
                      className="tools-group"
                      aria-hidden={copyIndex === 1}
                    >
                      {toolLogos.map((tool) => (
                        <div
                          key={`${tool.name}-${copyIndex}`}
                          className="tools-logo-chip"
                        >
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            loading="lazy"
                            className={tool.wide ? 'tools-logo-image tools-logo-image-wide' : 'tools-logo-image'}
                          />
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {[
                  'Frontend: React / Next.js',
                  'Backend: Express.js / FastAPI / Django',
                  'Styling: Tailwind CSS',
                  'Data & Cloud: PostgreSQL / AWS'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group border border-cyan-400/25 rounded-xl bg-slate-950/55 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-slate-900/85 hover:shadow-[0_10px_28px_rgba(34,211,238,0.2)]"
                  >
                    <p className="text-cyan-50 text-sm font-medium transition-colors duration-300 group-hover:text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
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
