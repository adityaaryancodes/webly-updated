import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';

const AppDevelopment = () => {
  return (
    <section id="app-development" className="py-24 bg-slate-950 relative overflow-hidden min-h-screen">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-6">
            <Smartphone className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            App Development
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Scalable iOS and Android applications built for modern business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our App Development</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We specialize in cross-platform and native app development, creating intuitive mobile applications that engage users and drive business growth. Our apps are built for performance, security, and scalability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Core Capabilities</h3>
              <ul className="space-y-3">
                {[
                  'Native iOS & Android development',
                  'Cross-platform solutions (React Native, Flutter)',
                  'Offline functionality & data sync',
                  'Push notifications & real-time updates',
                  'App Store & Play Store optimization',
                  'User analytics & performance monitoring'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Platforms & Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { tech: 'Swift', desc: 'Native iOS development' },
                { tech: 'Kotlin', desc: 'Native Android development' },
                { tech: 'React Native', desc: 'Cross-platform efficiency' },
                { tech: 'Flutter', desc: 'Beautiful multi-platform apps' },
                { tech: 'Firebase', desc: 'Backend & real-time database' },
                { tech: 'CI/CD Pipeline', desc: 'Automated testing & deployment' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-blue-400/25 bg-slate-950/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/70 hover:bg-slate-900/85 hover:shadow-[0_10px_24px_rgba(59,130,246,0.22)]"
                >
                  <p className="text-white font-semibold transition-colors duration-300 group-hover:text-blue-100">
                    {item.tech}
                  </p>
                  <p className="text-gray-400 text-sm mt-1 transition-colors duration-300 group-hover:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Development Lifecycle</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Requirements', desc: 'Define features and user experience' },
              { step: '02', title: 'Design', desc: 'Mockups, prototypes, and user flows' },
              { step: '03', title: 'Development', desc: 'Agile development with testing' },
              { step: '04', title: 'Release & Update', desc: 'Store submission and continuous improvement' }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-4">
                <p className="text-blue-400 text-3xl font-bold mb-2">{item.step}</p>
                <p className="text-white font-semibold mb-2">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
            Build Your App Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute -left-96 -top-96 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      <div className="absolute -right-96 -bottom-96 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
    </section>
  );
};

export default AppDevelopment;
