import React from "react";
import { motion } from "framer-motion";
import { HiCheck, HiOutlineArrowRight } from "react-icons/hi";

const plans = [
  {
    name: "Basic",
    price: "US $499",
    description:
      "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
    features: [
      "Fully responsive on all screens",
      "Design + Development",
      "Private communication channel",
      "1–3 days turnaround time",
    ],
    cta: "Buy Now",
  },
  {
    name: "Premium",
    price: "US $1299",
    description:
      "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "24-hour support response time",
      "Private communication channel",
      "3–5 days turnaround time",
    ],
    cta: "Buy Now",
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Private communication channel",
      "Priority Development Queue",
      "Dedicated Project Manager",
    ],
    cta: "Contact Us",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
          Simple Pricing
        </h1>
        <p className="text-xl text-gray-300">Choose your plan</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-cyan-400 mb-2">
              {plan.name}
            </h2>
            <p className="text-xl font-bold mb-4">{plan.price}</p>
            <p className="text-gray-300 mb-6">{plan.description}</p>
            <ul className="space-y-3 text-sm md:text-base mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <HiCheck className="text-cyan-400 text-xl mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-300">
              {plan.cta} <HiOutlineArrowRight className="text-xl" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
