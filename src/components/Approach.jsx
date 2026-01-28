import React from 'react';

// Data for the steps
const steps = [
  {
    number: 1,
    title: "Consult",
    description: "By aligning on vision, scope, and outcomes, we deep-dive into your business needs and technical requirements before building."
  },
  {
    number: 2,
    title: "Develop",
    description: "Build, validate, and refine development with transparency, speed, and quality."
  },
  {
    number: 3,
    title: "Deliver",
    description: "Beyond deployment, we deliver secure, scalable and optimized solutions for long-term performance."
  }
];

// Reusable Step Card Component
const StepCard = ({ number, title, description }) => (
  <div className="bg-gray-900/80 p-8 rounded-3xl backdrop-blur-sm border border-white/5">
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-lg mb-6">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const OurApproach = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Purple Glow Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          
          {/* Left Column: Text info */}
          <div className="lg:w-5/12">
            <h2 className="text-5xl font-serif text-white mb-8">
              Our Approach
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              A step-by-step look at how we operate, from strategy to execution, ensuring quality at every stage.
            </p>
          </div>

          {/* Right Column: Steps List */}
          <div className="lg:w-6/12 space-y-6">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurApproach;