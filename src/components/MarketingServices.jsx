import React from 'react';
import { BarChart, ArrowRight } from 'lucide-react';

const MarketingServices = () => {
  return (
    <section id="marketing-services" className="py-24 bg-slate-950 relative overflow-hidden min-h-screen">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-green-500/10 mb-6">
            <BarChart className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Digital Marketing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Complete digital marketing solutions designed to drive growth, increase visibility, and maximize ROI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Marketing Strategy</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We combine data-driven insights with creative excellence to deliver marketing campaigns that convert. From SEO and PPC to social media and content marketing, we have the expertise to amplify your brand presence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Search Engine Optimization (SEO)',
                  'Pay-Per-Click (PPC) Advertising',
                  'Social Media Marketing & Management',
                  'Content Marketing & Strategy',
                  'Email Marketing Campaigns',
                  'Conversion Rate Optimization',
                  'Analytics & Reporting',
                  'Brand Strategy & Positioning'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Channels We Master</h3>
            <div className="space-y-4">
              {[
                { channel: 'Google Ads', desc: 'Target high-intent customers' },
                { channel: 'Facebook & Instagram', desc: 'Audience targeting & retargeting' },
                { channel: 'LinkedIn', desc: 'B2B lead generation' },
                { channel: 'Search Engines', desc: 'Organic visibility & rankings' },
                { channel: 'Email', desc: 'Direct customer engagement' },
                { channel: 'TikTok & YouTube', desc: 'Video marketing campaigns' }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-green-500 pl-4">
                  <p className="text-white font-semibold">{item.channel}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Our Results-Driven Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: '150%', label: 'Avg. ROI Increase', desc: 'Within first 6 months' },
              { metric: '3.5x', label: 'Traffic Growth', desc: 'Through SEO & PPC' },
              { metric: '45%', label: 'Lead Increase', desc: 'Qualified prospects' },
              { metric: '200%', label: 'Customer Retention', desc: 'Via email campaigns' }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-6 text-center">
                <p className="text-green-400 text-4xl font-bold mb-2">{item.metric}</p>
                <p className="text-white font-semibold mb-2">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-white mb-4">SEO Strategy</h4>
            <ul className="space-y-2">
              {['Keyword research & analysis', 'On-page & technical SEO', 'Link building campaign', 'Monthly reporting'].map((item, idx) => (
                <li key={idx} className="text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-white mb-4">Social Media Management</h4>
            <ul className="space-y-2">
              {['Content creation & scheduling', 'Community engagement', 'Influencer partnerships', 'Growth tracking'].map((item, idx) => (
                <li key={idx} className="text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
            Grow Your Business
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute -left-96 -top-96 w-96 h-96 bg-green-500/10 rounded-full blur-[128px]" />
      <div className="absolute -right-96 -bottom-96 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
    </section>
  );
};

export default MarketingServices;
