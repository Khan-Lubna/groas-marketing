import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const comparisons = [
  {
    typical: 'Generic, copy-paste strategies',
    groas: 'Custom systems built for your business'
  },
  {
    typical: 'Random ads with no testing framework',
    groas: 'Structured creative & audience testing'
  },
  {
    typical: 'Black box reporting, no transparency',
    groas: 'Clear attribution & actionable insights'
  },
  {
    typical: 'Promises without performance guarantees',
    groas: 'Results-focused with clear KPI targets'
  }
];

const Comparison = () => {
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
            Why Choose Groas Marketing?
          </h2>
          <p className="text-xl text-gray-400">
            The clear difference between us and typical agencies
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {/* Headers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center pb-6 border-b border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-500">Typical Agencies</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center pb-6 border-b border-[#0099FF]"
            >
              <h3 className="text-2xl font-bold text-[#0099FF]">Groas Marketing</h3>
            </motion.div>

            {/* Comparisons */}
            {comparisons.map((comparison, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-[#1a1a1a]/50 rounded-lg"
                >
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-400">{comparison.typical}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-[#0099FF]/10 rounded-lg border border-[#0099FF]/30"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#0099FF] flex-shrink-0" />
                  <p className="text-white font-medium">{comparison.groas}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 max-w-2xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 p-6 bg-[#1a1a1a]/50 rounded-lg">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Typical Agencies</p>
                  <p className="text-gray-400">{comparison.typical}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-[#0099FF]/10 rounded-lg border border-[#0099FF]/30">
                <CheckCircle2 className="w-6 h-6 text-[#0099FF] flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#0099FF] mb-1">Groas Marketing</p>
                  <p className="text-white font-medium">{comparison.groas}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;