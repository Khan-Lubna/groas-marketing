import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import GrowthAuditForm from './GrowthAuditForm';

const FinalCTA = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0099FF] via-[#0077cc] to-[#005599]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItNGgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bS0yIDBoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tMiAyaDJ2MmgtMnYtMnptLTIgMGgydjJoLTJ2LTJ6bS0yIDBoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0yIDB2Mmg0di0yaC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Wasting Ad Spend. Start Scaling.
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
              Get a free growth audit from Meta Ads experts who understand the algorithm, your funnel, and what it takes to scale profitably.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => setOpenForm(true)}
                className="bg-white text-[#0099FF] hover:bg-gray-100 px-10 py-7 text-xl font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Book Your Free Growth Audit
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
            <p className="mt-6 text-white/80 text-sm">
              No commitment. No sales pitch. Just actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      <GrowthAuditForm
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </>
  );
};

export default FinalCTA;