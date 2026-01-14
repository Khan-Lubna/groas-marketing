import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, Rocket, Target } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnose',
    bullets: ['Data & Analytics Audit', 'Pixel & Tracking Setup', 'Funnel Performance Analysis']
  },
  {
    icon: Wrench,
    title: 'Engineer',
    bullets: ['High-Converting Creatives', 'Scroll-Stopping Hooks', 'Irresistible Offers']
  },
  {
    icon: Rocket,
    title: 'Scale',
    bullets: ['Meta Andromeda Optimization', 'Budget Control Systems', 'Campaign Architecture']
  },
  {
    icon: Target,
    title: 'Optimize',
    bullets: ['Conversion Rate Optimization', 'Retention Strategies', 'Lifetime Value Maximization']
  }
];

const Framework = () => {
  return (
    <section className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The GROAS Growth Framework
          </h2>
          <p className="text-xl text-gray-400">
            Our proven 4-step system for predictable, profitable scaling
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0099FF]/20 via-[#0099FF]/50 to-[#0099FF]/20" style={{ top: '80px' }} />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#0099FF] rounded-full flex items-center justify-center mb-6 z-10 shadow-lg shadow-[#0099FF]/30">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="text-gray-400 text-sm">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute top-8 -right-10 w-8 h-8 text-[#0099FF]/50 z-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#0099FF] rounded-full flex items-center justify-center shadow-lg shadow-[#0099FF]/30">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-400">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;