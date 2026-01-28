import React from 'react';
import { Server, ArrowRight } from 'lucide-react';

const WebMaintenance = () => {
  return (
    <section id="web-maintenance" className="py-24 bg-slate-950 relative overflow-hidden min-h-screen">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-purple-500/10 mb-6">
            <Server className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Web Maintenance & Support
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            24/7 security updates, performance optimization, and comprehensive support for your digital assets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Keep Your Site Running Perfectly</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Don't let technical issues impact your business. Our maintenance services ensure your website stays secure, fast, and always available. We handle updates, security patches, and performance optimization so you can focus on growing your business.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Services Included</h3>
              <ul className="space-y-3">
                {[
                  'Regular security audits & patches',
                  '24/7 uptime monitoring',
                  'Automated daily backups',
                  'Speed & performance optimization',
                  'Plugin & software updates',
                  'SSL certificate management',
                  'Malware scanning & removal',
                  'Content updates & management'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Maintenance Plans</h3>
            <div className="space-y-4">
              {[
                { plan: 'Essential', price: '$299/mo', desc: 'Backups, updates, monitoring' },
                { plan: 'Professional', price: '$599/mo', desc: 'Everything + security audits' },
                { plan: 'Enterprise', price: 'Custom', desc: 'Dedicated support & optimization' }
              ].map((item, idx) => (
                <div key={idx} className="border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-semibold">{item.plan}</p>
                    <p className="text-purple-400 font-bold">{item.price}</p>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">What We Monitor</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🔒', title: 'Security', items: ['Threat detection', 'Vulnerability scans', 'Malware removal'] },
              { icon: '⚡', title: 'Performance', items: ['Load times', 'Database optimization', 'CDN setup'] },
              { icon: '📊', title: 'Analytics', items: ['Traffic monitoring', 'Error tracking', 'User behavior'] }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-6">
                <p className="text-3xl mb-3">{item.icon}</p>
                <p className="text-white font-semibold mb-3">{item.title}</p>
                <ul className="space-y-2">
                  {item.items.map((subitem, sidx) => (
                    <li key={sidx} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {subitem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
            Get Maintenance Support
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute -left-96 -top-96 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      <div className="absolute -right-96 -bottom-96 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px]" />
    </section>
  );
};

export default WebMaintenance;
