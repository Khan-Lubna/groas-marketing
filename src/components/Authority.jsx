import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const statements = [
  {
    title: 'System-Driven Execution Over Guesswork',
    description: 'Every decision backed by data, every campaign built on proven frameworks, not hunches.'
  },
  {
    title: 'Performance Over Vanity Metrics',
    description: 'We optimize for ROAS and revenue growth, not impressions and engagement that don\'t pay the bills.'
  },
  {
    title: 'No Copy-Paste Campaigns',
    description: 'Custom strategies tailored to your market, product, and customer journey—not recycled templates.'
  },
  {
    title: 'Data-First Decision Making',
    description: 'Real attribution, transparent reporting, and insights that inform every scaling move.'
  }
];

const Authority = () => {
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
            How We Work Differently
          </h2>
          <p className="text-xl text-gray-400">
            Our principles for predictable, profitable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-[#0099FF]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {statement.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {statement.description}
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

export default Authority;