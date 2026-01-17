import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const GrowthAuditForm = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔁 Simulate API call (replace later)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-y-auto px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // className="bg-[#0b1220] text-white w-full max-w-2xl rounded-2xl p-8 relative shadow-2xl"
            className="bg-[#0b1220] text-white w-full max-w-2xl rounded-2xl p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            {/* CONTENT SWITCH */}
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                /* ================= FORM ================= */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="text-3xl font-bold mb-2">
                    Ready to Scale Profitably?
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Book a free growth audit. We’ll analyze your funnel and show you
                    exactly where you’re leaving money on the table.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      required
                      placeholder="Your Name *"
                      className="w-full bg-[#1a2233] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0099FF]"
                    />

                    <input
                      required
                      placeholder="Contact Number *"
                      className="w-full bg-[#1a2233] border border-gray-700 rounded-lg px-4 py-3"
                    />

                    <input
                      required
                      placeholder="Monthly Ad Spend *"
                      className="w-full bg-[#1a2233] border border-gray-700 rounded-lg px-4 py-3"
                    />

                    <textarea
                      rows="4"
                      placeholder="Tell us about your growth goals..."
                      className="w-full bg-[#1a2233] border border-gray-700 rounded-lg px-4 py-3 resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 bg-[#0099FF] hover:bg-[#0088ee] py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      {isSubmitting ? "Submitting..." : "Book Your Free Growth Audit →"}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                      For serious brands only. Minimum ad spend: ₹50k/month
                    </p>
                  </form>
                </motion.div>
              ) : (
                /* ================= SUCCESS ================= */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />

                  <h3 className="text-3xl font-bold mb-3">
                    Audit Booked Successfully 🎉
                  </h3>

                  <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Our team will review your details and reach out within 24 hours.
                  </p>

                  <button
                    onClick={onClose}
                    className="bg-[#0099FF] px-8 py-3 rounded-lg font-semibold hover:bg-[#0088ee]"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GrowthAuditForm;
