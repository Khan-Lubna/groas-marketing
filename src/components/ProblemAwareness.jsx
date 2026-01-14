import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, AlertCircle, BarChart3 } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    title: 'Wasted Ad Spend',
    description: 'Burning cash on campaigns that don\'t convert. Every dollar should work harder for your business.'
  },
  {
    icon: TrendingDown,
    title: 'Low or Unstable ROAS',
    description: 'Inconsistent returns that make scaling impossible. You need predictable, profitable growth.'
  },
  {
    icon: AlertCircle,
    title: 'Agencies Who Don\'t Understand Meta\'s Algorithm',
    description: 'Generic strategies that ignore Meta\'s latest updates. You deserve expertise that stays ahead.'
  },
  {
    icon: BarChart3,
    title: 'No Clarity in Tracking & Scaling',
    description: 'Flying blind without proper attribution. You can\'t scale what you can\'t measure accurately.'
  }
];

const ProblemAwareness = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-400">
            These problems are costing you growth every single day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#0099FF] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0099FF]/10 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-[#0099FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAwareness;