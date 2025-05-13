import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ClientCarousel from "../pages/ClientCarousel";

const Home = () => {
  useEffect(() => {
    // Tawk.to Widget Script Integration
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6822d2e86e1d72190c299efe/1ir4179mm"; // Replace with your Tawk.to widget ID
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Insert the script into the body
    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(script, s0);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChatToggle = () => {
    // Open Tawk.to chat widget when clicked
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    } else {
      console.error("Tawk API is not available.");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Line-drawing SVG */}
        <div className="relative w-64 h-64 mb-8">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-full h-full"
            initial={{ strokeDasharray: 0, strokeDashoffset: 100 }}
            animate={{ strokeDasharray: 100, strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.path
              d="M10 80 C 40 10, 65 10, 95 80"
              stroke="cyan"
              strokeWidth="2"
              fill="transparent"
            />
          </motion.svg>
        </div>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          Create, grow, and <span className="text-cyan-400">scale</span> your business
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          Tailor-made strategies built for your success. Our creative team is here to help you thrive.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.0, duration: 0.5 }}
        >
          <a href="/bookacall">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Book a Call
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Chat Button */}
      <a
        href="#"
        onClick={handleChatToggle}
        className="fixed bottom-8 right-8 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full  shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 0.5 }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h8m2 4h-2m2-4v8M6 6h12m-3 4h2m-2 0h-4m4 0h2m-6 0h2" />
          </svg>
        </motion.div>
      </a>
    </div>
  );
};

export default Home;
