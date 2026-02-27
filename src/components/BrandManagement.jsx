import React from 'react';
import { PenTool, ArrowRight } from 'lucide-react';

const BrandManagement = () => {
  return (
    <section id="brand-management" className="py-24 bg-slate-950 relative overflow-hidden min-h-screen">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-pink-500/10 mb-6">
            <PenTool className="w-10 h-10 text-pink-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Brand Management & Design
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Strategic identity design that defines your market presence and builds lasting customer connections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Build a Memorable Brand</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your brand is more than just a logo. It's the entire experience customers have with your business. We create comprehensive brand identities that resonate with your target audience and stand out in the market.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What We Create</h3>
              <ul className="space-y-3">
                {[
                  'Logo Design & Brand Mark',
                  'Brand Strategy & Positioning',
                  'Brand Guidelines & Manuals',
                  'Visual Identity System',
                  'Typography & Color Palette',
                  'Packaging Design',
                  'Marketing Collateral',
                  'Brand Voice & Messaging'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Design Elements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { element: 'Logo Design', desc: 'Unique, memorable, timeless' },
                { element: 'Color Strategy', desc: 'Psychology-based color systems' },
                { element: 'Typography', desc: 'Custom font pairings & hierarchy' },
                { element: 'Imagery Style', desc: 'Photography & illustration direction' },
                { element: 'UI/UX Design', desc: 'Consistent digital experience' },
                { element: 'Motion Design', desc: 'Animated brand elements' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-pink-400/25 bg-slate-950/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/70 hover:bg-slate-900/85 hover:shadow-[0_10px_24px_rgba(236,72,153,0.24)]"
                >
                  <p className="text-white font-semibold transition-colors duration-300 group-hover:text-pink-100">
                    {item.element}
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
          <h3 className="text-2xl font-bold text-white mb-6">Our Brand Strategy Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Research & insights' },
              { step: '02', title: 'Strategy', desc: 'Positioning & messaging' },
              { step: '03', title: 'Design', desc: 'Visual identity' },
              { step: '04', title: 'Guidelines', desc: 'Brand manual' },
              { step: '05', title: 'Launch', desc: 'Implementation' }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-4">
                <p className="text-pink-400 text-2xl font-bold mb-1">{item.step}</p>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-white mb-4">Brand Audit</h4>
            <p className="text-gray-300 mb-4">Evaluate your current brand and identify improvement opportunities</p>
            <ul className="space-y-2">
              {['Competitor analysis', 'Market positioning review', 'Customer perception study', 'Visual consistency audit'].map((item, idx) => (
                <li key={idx} className="text-gray-400 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-white mb-4">Brand Refresh</h4>
            <p className="text-gray-300 mb-4">Modernize your existing brand while maintaining recognition</p>
            <ul className="space-y-2">
              {['Logo evolution', 'Color palette updates', 'New guidelines', 'Implementation rollout'].map((item, idx) => (
                <li key={idx} className="text-gray-400 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
            Build Your Brand Identity
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute -left-96 -top-96 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px]" />
      <div className="absolute -right-96 -bottom-96 w-96 h-96 bg-rose-500/10 rounded-full blur-[128px]" />
    </section>
  );
};

export default BrandManagement;
