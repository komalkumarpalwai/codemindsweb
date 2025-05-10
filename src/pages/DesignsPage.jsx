import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LogoDesign from '../pages/Logodesign';
import LandingPageB from "../pages/LandingPageB"
const DesignServicesPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const [activeTab, setActiveTab] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [logoColor, setLogoColor] = useState('#6B46C1');
  const [logoStyle, setLogoStyle] = useState('modern');

  const designServices = [
    {
      title: "Logo Design",
      description: "Unique and memorable logos that capture your brand identity and make a lasting impression.",
      price: "Starting from $199",
      features: [
        "3 initial concepts",
        "Unlimited revisions",
        "Multiple file formats",
        "Brand guidelines"
      ],
      image: "https://img.freepik.com/free-vector/gradient-logo-collection_23-2148942786.jpg",
      icon: "🖌️",
      category: "branding"
    },
    {
      title: "Brand Identity",
      description: "Complete visual identity packages including color palette, typography, and brand guidelines.",
      price: "Starting from $499",
      features: [
        "Logo design",
        "Color palette",
        "Typography system",
        "Brand guidelines PDF",
        "Social media templates"
      ],
      image: "https://img.freepik.com/free-vector/gradient-branding-pack_23-2149077412.jpg",
      icon: "🎨",
      category: "branding"
    },
    {
      title: "Print Design",
      description: "Business cards, letterheads, brochures, and other printed materials with premium quality.",
      price: "Starting from $149",
      features: [
        "Print-ready files",
        "Bleed and crop marks",
        "CMYK color mode",
        "Multiple design concepts"
      ],
      image: "https://img.freepik.com/free-psd/business-card-mockup_1310-812.jpg",
      icon: "📇",
      category: "print"
    },
    {
      title: "Packaging Design",
      description: "Eye-catching packaging that stands out on shelves and communicates your brand values.",
      price: "Starting from $399",
      features: [
        "3D mockups",
        "Die-line creation",
        "Material recommendations",
        "Print-ready files"
      ],
      image: "https://img.freepik.com/free-psd/package-mockup_125540-572.jpg",
      icon: "📦",
      category: "print"
    },
    {
      title: "Social Media Graphics",
      description: "Consistent, on-brand graphics for all your social media platforms.",
      price: "Starting from $299/mo",
      features: [
        "10 custom graphics per month",
        "Platform-optimized sizes",
        "Posting schedule",
        "Brand consistency"
      ],
      image: "https://img.freepik.com/free-vector/social-media-post-template-collection_23-2149097639.jpg",
      icon: "📱",
      category: "digital"
    },
    {
      title: "Web & App UI/UX",
      description: "User-centered interface designs that enhance usability and create delightful experiences.",
      price: "Starting from $999",
      features: [
        "Wireframing",
        "High-fidelity mockups",
        "Interactive prototypes",
        "User testing"
      ],
      image: "https://img.freepik.com/free-psd/website-mockup_1293-77.jpg",
      icon: "💻",
      category: "digital"
    }
  ];

  const designStyles = [
    { name: "Minimalist", description: "Clean, simple designs with ample white space", color: "#F56565" },
    { name: "Modern", description: "Sleek designs with contemporary elements", color: "#4299E1" },
    { name: "Vintage", description: "Classic, retro-inspired designs with nostalgic elements", color: "#D69E2E" },
    { name: "Handcrafted", description: "Organic, hand-drawn elements with texture", color: "#68D391" },
    { name: "Luxury", description: "Elegant designs with premium finishes", color: "#9F7AEA" },
    { name: "Playful", description: "Colorful, fun designs with whimsical elements", color: "#F687B3" }
  ];

  const quizQuestions = [
    {
      question: "What best describes your brand personality?",
      options: [
        "Professional and trustworthy",
        "Innovative and cutting-edge",
        "Friendly and approachable",
        "Luxurious and exclusive"
      ]
    },
    {
      question: "Which colors resonate with your brand?",
      options: [
        "Neutrals (black, white, gray)",
        "Bright and bold",
        "Pastels and soft tones",
        "Deep and rich"
      ]
    },
    {
      question: "What design style appeals to you most?",
      options: [
        "Clean and minimal",
        "Geometric and structured",
        "Organic and flowing",
        "Detailed and ornate"
      ]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? designServices 
    : designServices.filter(service => service.category === activeTab);

  const handleQuizAnswer = (answer) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Determine recommended style based on answers
      const styleIndex = newAnswers.reduce((acc, curr) => acc + curr.charCodeAt(0), 0) % designStyles.length;
      setSelectedStyle(designStyles[styleIndex]);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setSelectedStyle(null);
  };

  const renderLogoPreview = () => {
    // Simple logo preview based on selected options
    return (
      <div className="flex items-center justify-center h-64">
        <div 
          className={`flex items-center justify-center rounded-full transition-all duration-500`}
          style={{
            width: 120,
            height: 120,
            backgroundColor: logoColor,
            transform: logoStyle === 'modern' ? 'rotate(0deg)' : 'rotate(45deg)'
          }}
        >
          <span className="text-white text-4xl font-bold">B</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-32 bg-gradient-to-br from-[#00B8DB] to-[#0085A1] text-white overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden opacity-20">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 100],
          x: [0, (Math.random() - 0.5) * 50],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </div>

  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Design <span className="text-[#FFD700]">Services</span>
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      Stunning visual designs that elevate your brand and captivate your audience
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Link
        to="/contact"
        className="inline-block bg-[#FFD700] hover:bg-[#FFC800] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        Request a Design Quote
      </Link>
    </motion.div>
  </div>
</section>


      {/* Interactive Design Style Quiz */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Find Your <span className="text-cyan-600">Design Style</span>
      </h2>
      <p className="text-lg text-gray-600">
        Take our quick quiz to discover the perfect design style for your brand
      </p>
    </motion.div>

    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {selectedStyle ? (
        <div className="p-8 text-center">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl" 
               style={{ backgroundColor: selectedStyle.color }}>
            🎉
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Your Recommended Style: <span style={{ color: selectedStyle.color }}>{selectedStyle.name}</span>
          </h3>
          <p className="text-gray-600 mb-6">{selectedStyle.description}</p>
          <button
            onClick={resetQuiz}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Take Quiz Again
          </button>
        </div>
      ) : (
        <div className="p-8">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">
                Question {quizStep + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-cyan-600">
                {Math.round((quizStep / quizQuestions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-cyan-600 h-2.5 rounded-full" 
                style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {quizQuestions[quizStep].question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions[quizStep].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleQuizAnswer(option)}
                className="p-4 border border-gray-200 rounded-lg text-left hover:border-cyan-300 hover:bg-cyan-50 transition-colors duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  </div>
</section>


      {/* Interactive Logo Customizer */}
      <LogoDesign/>


      {/* Filterable Design Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-center mb-12"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
      Our <span className="text-[#00A2C2]">Design</span> Services
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Comprehensive design solutions tailored to your business needs
    </p>
  </motion.div>

  <motion.div
    className="flex justify-center mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="inline-flex rounded-xl bg-gray-100 p-1">
      {['all', 'branding', 'print', 'digital'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab ? 'bg-white text-[#00A2C2] shadow' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  </motion.div>

  <motion.div
    className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
  >
    {filteredServices.map((service, idx) => (
      <motion.div
        key={idx}
        variants={fadeInUp}
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
        whileHover={{ y: -10 }}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-4xl absolute top-6 right-6 bg-[#00A2C2] text-white p-3 rounded-lg">
              {service.icon}
            </div>
          </div>
        </div>
        <div className="bg-white p-6 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
          
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-[#00A2C2] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/contact"
            className="mt-auto inline-block w-full text-center bg-[#00A2C2] hover:bg-[#008C9E] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Get This Service
          </Link>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* Interactive Design Style Showcase */}
   <LandingPageB />

      {/* CTA Section */}
      <section className="relative text-center py-28 bg-gradient-to-r from-[#00A2C2] to-[#008C9E] text-white overflow-hidden">
  <div className="absolute inset-0 overflow-hidden opacity-10">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: Math.random() * 10 + 5,
          height: Math.random() * 10 + 5,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 20],
          x: [0, (Math.random() - 0.5) * 20]
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </div>
  
  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Ready to Elevate Your Brand?
    </motion.h2>
    <motion.p
      className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      Let's create something beautiful together that represents your unique vision
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row justify-center gap-4"
    >
      <Link
        to="/contact"
        className="inline-block bg-white text-[#00A2C2] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        Start Your Design Project
      </Link>
      <Link
        to="/services"
        className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#00A2C2] transition-all duration-300 transform hover:-translate-y-1"
      >
        Explore All Services
      </Link>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default DesignServicesPage;