import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Social Media Strategy",
    description: "Build and engage your audience on major platforms like Instagram & LinkedIn.",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Email Campaigns",
    description: "Send personalized campaigns that convert leads into loyal customers.",
    color: "from-green-400 to-teal-500",
  },
];

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12 " id="digital-marketing">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4  text-cyan-400">
          Digital Marketing Solutions
        </h1>
        <p className="text-lg text-gray-600">
          We help you connect, engage, and grow through smart digital strategies.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className={`rounded-xl p-6 text-white shadow-lg bg-gradient-to-br ${service.color}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="opacity-90">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-3 
            bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Get a Free Strategy Call
        </motion.button>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;
