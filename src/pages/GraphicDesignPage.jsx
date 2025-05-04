import React, { useState, useEffect, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Particle = ({ x, y }) => (
  <motion.div
    className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 rounded-full"
    initial={{ opacity: 0 }}
    animate={{ x: [0, x * 2], y: [0, y * 2], opacity: [1, 0], scale: [1, 2] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
  />
);

const InteractiveChart = () => {
  // Example data for the bar chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const [hoveredData, setHoveredData] = useState(null);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: $${context.raw}`; // Corrected template literal
          },
        },
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        const index = chartElement[0].index;
        setHoveredData(data.labels[index]);
      } else {
        setHoveredData(null);
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#4b4b4b",
        },
        grid: {
          color: "#e1e1e1",
        },
      },
      x: {
        ticks: {
          color: "#4b4b4b",
        },
        grid: {
          color: "#e1e1e1",
        },
      },
    },
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl shadow-lg" id="graphic-design">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Interactive Sales Data</h2>
      {hoveredData && (
        <div className="text-center mb-6 text-xl font-semibold text-gray-700">
          <p>
            You are viewing data for: <span className="text-teal-600">{hoveredData}</span>
          </p>
        </div>
      )}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg text-gray-600">Hover over the bars to view specific monthly sales data.</p>
      </div>
    </div>
  );
};

const GraphicDesignPage = () => {
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();
  const galleryX = useTransform(scrollY, [0, 500], ["0%", "-50%"]);
  const [fontIndex, setFontIndex] = useState(0);
  const fonts = ["font-sans", "font-serif", "font-mono"];
  const particles = useMemo(
    () => Array.from({ length: 40 }, (_, i) => ({ id: i, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 })),
    []
  );

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0">
          {particles.map(({ id, x, y }) => (
            <Particle key={id} x={x} y={y} />
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} transition={{ duration: 1 }} className="text-center z-10 text-white">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-8 mx-auto w-40 h-40"
          >
            <svg viewBox="0 0 100 100">
              <motion.path
                d="M50 5 L75 25 L75 75 L25 75 L25 25 Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </motion.div>
          <h1 className="text-6xl font-bold mb-4">Graphic Design</h1>
          <p className="text-2xl opacity-90">
            We create stunning visuals for your brand.<br />From logos to social media posts, we've got you covered.
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <InteractiveChart />
      </section>
    </div>
  );
};

export default GraphicDesignPage;
