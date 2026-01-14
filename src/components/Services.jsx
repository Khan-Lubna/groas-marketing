import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, LineChart, Target } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Meta Ads (Andromeda-Optimized)',
    bullets: [
      'Campaign architecture built for Meta\'s algorithm',
      'Scaling without killing ROAS',
      'Advanced audience & creative testing'
    ]
  },
  {
    icon: Layout,
    title: 'Funnel & Landing Page Design',
    bullets: [
      'High-converting page architecture',
      'Mobile-first responsive design',
      'Psychology-driven user journeys'
    ]
  },
  {
    icon: LineChart,
    title: 'Conversion Rate Optimization',
    bullets: [
      'Data-driven testing roadmap',
      'Checkout & form optimization',
      'Increased revenue per visitor'
    ]
  },
  {
    icon: Target,
    title: 'Lead Generation Systems',
    bullets: [
      'Quality lead capture mechanisms',
      'Automated qualification flows',
      'Pipeline-ready prospect delivery'
    ]
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Services That Drive Results
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to scale profitably on Meta
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-[#1a1a1a] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#0099FF]/20 transition-all duration-300 border border-gray-800 hover:border-[#0099FF]/50"
            >
              <div className="w-14 h-14 bg-[#0099FF]/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#0099FF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-2">
                    <span className="text-[#0099FF] mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;