import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "React",
    src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    name: "Bootstrap",
    src: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
];

const BrandsPage = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-10" id="brands">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-cyan-400">
          We Choose the Best to Deliver Maximum Results
        </h1>
        <p className="text-lg text-gray-600">
          From small businesses to large corporations, we’ve helped many brands elevate their business.
        </p>
      </motion.div>

      {/* Logos Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="w-20 h-20 object-contain mb-2 grayscale hover:grayscale-0 transition duration-300"
            />
            <span className="text-sm font-medium text-gray-700">{logo.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className="mt-12 max-w-3xl mx-auto text-center bg-gray-100 p-8 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xl font-medium text-gray-700 italic mb-4">
          "We got rid of nearly a dozen different tools because of what CodeMinds does for us."
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <img
            src="https://codeminds-rho.vercel.app/images/logo.svg"
            alt="CodeMinds Logo"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left">
            <p className="text-md font-semibold text-gray-800">
              Srirangam Srinivas Rao
            </p>
            <p className="text-sm text-gray-600">Founder, Codeminds Web Services</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandsPage;
