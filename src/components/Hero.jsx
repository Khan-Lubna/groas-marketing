import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1675320458457-fe4576cbd0f8"
          alt="Meta Ads Growth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div className="relative z-20 flex justify-center mb-6">
            <div className="relative overflow-visible z-20">
              <svg
                width="80"
                viewBox="-20 -20 149 177"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M94.053 3.812C92.984 5.908 90.932 10.524 89.492 14.069C88.052 17.614 85.921 21.528 84.757 22.768C81.992 25.711 82.876 27.71 87.313 28.542C89.282 28.911 90.893 29.41 90.893 29.649C90.893 29.889 89.341 39.881 87.445 51.854C83.144 79.003 77.802 104.806 74.896 112.467L72.679 118.311L68.457 122.717L64.236 127.123L61.814 127.133L59.393 127.144L48.893 116.226C38.593 105.516 35.591 103.123 32.462 103.123C29.403 103.123 22.933 110.389 17.702 119.696L12.393 129.144L11.257 127.598C9.912 125.769 5.893 110.222 5.893 106.85C5.893 105.561 5.246 103.632 4.454 102.564L3.015 100.623L1.507 102.123L0 103.623L0.939003 111.03C2.296 121.737 4.713 129.483 7.88 133.277L10.65 136.595L13.391 135.609L16.131 134.623L21.254 125.26C24.072 120.11 27.751 114.307 29.43 112.365L32.483 108.833L34.588 109.96C35.745 110.579 40.203 115.148 44.494 120.113L52.295 129.139L56.62 131.233L60.945 133.327L63.669 132.647C74.341 129.983 80.908 118.425 86.35 92.726C88.27 83.661 96.893 32.072 96.893 29.653C96.893 29.361 98.863 29.123 101.271 29.123H105.648L106.84 27.687L108.032 26.251L106.879 24.098C106.246 22.914 104.752 17.147 103.56 11.284L101.393 0.622999L98.695 0.311998L95.996 0L94.053 3.812Z"
                  fill="none"
                  stroke="#0099FF"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  pathLength="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeOut" }}
                />
              </svg>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-[#0099FF] text-sm tracking-widest font-semibold mb-2"
          >
            {"GROAS MARKETING".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + i * 0.3 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            We Engineer Profitable Growth on Meta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed"
          >
            Meta Ads expertise, scaling systems, and ROAS focus for founders and D2C brands
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#0099FF] hover:bg-[#0088ee] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book a Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <button className="text-[#0099FF] hover:text-[#0088ee] text-lg font-semibold underline underline-offset-4 transition-colors duration-300">
              See Our Scaling System
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;