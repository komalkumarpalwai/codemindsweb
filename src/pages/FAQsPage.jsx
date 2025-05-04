import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is CodeMinds?",
    answer:
      "CodeMinds is a full-service digital tech agency providing solutions in software, design, marketing, and automation tailored to modern businesses.",
  },
  {
    question: "How to start?",
    answer:
      "Just reach out through our contact form or start a chat with us. We'll guide you from discovery to delivery.",
  },
  {
    question: "Pricing?",
    answer:
      "Our pricing is flexible based on your needs. We offer both custom quotes and subscription-based services for startups to enterprises.",
  },
  {
    question: "Support?",
    answer:
      "We provide 24/7 customer support via email, live chat, and phone. Our dedicated team ensures you’re never stuck.",
  },
];

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-white to-cyan-50 px-6 py-10">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-500 drop-shadow-lg">
          Have Questions?
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600">
          Get Answers. We're here to help you grow with clarity.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-cyan-100 bg-white shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 text-xl font-semibold text-gray-800 flex justify-between items-center hover:bg-cyan-50 transition-all duration-300 focus:outline-none"
            >
              <span>{faq.question}</span>
              <motion.span
                className="text-cyan-500 text-3xl"
                initial={false}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="px-6 pb-5 text-gray-600 text-base leading-relaxed"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
