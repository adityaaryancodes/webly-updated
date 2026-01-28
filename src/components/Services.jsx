import React from 'react';
import { Globe, Smartphone, PenTool, BarChart, Server, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Web Design & Dev",
    desc: "High-performance websites built with React & Node.js.",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    link: "#web-design-dev"
  },
  {
    title: "App Development",
    desc: "Scalable iOS and Android applications for modern business.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    link: "#app-development"
  },
  {
    title: "Web Maintenance",
    desc: "24/7 Security updates, speed optimization, and support.",
    icon: <Server className="w-8 h-8 text-purple-400" />,
    link: "#web-maintenance"
  },
  {
    title: "All Marketing Services",
    desc: "Complete digital marketing solutions for growth and visibility.",
    icon: <BarChart className="w-8 h-8 text-green-400" />,
    link: "#marketing-services"
  },
  {
    title: "Brand Management",
    desc: "Strategic identity design that defines your market presence.",
    icon: <PenTool className="w-8 h-8 text-pink-400" />,
    link: "#brand-management"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital services tailored for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <a href={s.link} key={index} className="group p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="mb-6 p-4 rounded-xl bg-slate-950 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;