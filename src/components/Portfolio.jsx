import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="bg-[#121212] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#0099FF] font-semibold tracking-widest uppercase mb-2">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Proven Results. Real Growth.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A snapshot of the performance systems we’ve built for D2C and growth-focused brands.
          </p>
        </motion.div>

        {/* Portfolio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -6 }}
          className="max-w-5xl mx-auto bg-[#ffffff] rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xlhover:shadow-[#0099FF]/20 hover:border-[#0099FF]/40">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            E-commerce / D2C Growth Campaign
          </h3>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-600 mb-6">
            Delivered massive visibility, strong purchase intent, and an efficient frequency —
            creating a solid foundation for long-term scalable growth.
          </p>

          <a
            href="/Groas-Portfolio.pdf"
            target="_blank"
            className="inline-flex items-center text-[#0099FF] font-semibold hover:underline"
          >
            View Full Portfolio (PDF)
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const stats = [
  { label: "Reach", value: "1.56M+" },
  { label: "Impressions", value: "2.08M+" },
  { label: "Ad Spend", value: "₹1.08L" },
  { label: "Purchase Signals", value: "102K+" },
];

export default Portfolio;