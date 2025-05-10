import React from 'react';
import { motion } from 'framer-motion';
import ClientCarousel from './ClientCarousel';
import avacollege from "../assets/avacollege.jpeg";
import knowvity from "../assets/knowvity.png";
import radhika from "../assets/radhika.jpeg";
import radhikaorg from "../assets/radhikaorg.jpeg";

// Sample testimonial data
const testimonials = [
  {
    name: "Sandeep Kumar",
    feedback: "Codeminds transformed our vision into a professional, responsive website that exceeded our expectations. Their attention to detail and dedication throughout the process was exceptional.",
    designation: "Founder, Knowvity",
    rating: 5
  },
  {
    name: "Pooja Reddy",
    feedback: "Our fashion eCommerce site is now stunning, super fast, and converts 35% better than before. Codeminds not only delivered beautiful design but also focused on performance and user experience.",
    designation: "CEO, Radhika Fashion",
    rating: 5
  }
];

// Services with icons and descriptions
const services = [
  {
    title: "Responsive Web Design",
    description: "Pixel-perfect designs that work flawlessly on all devices",
    icon: "📱"
  },
  {
    title: "Landing Pages",
    description: "High-converting pages designed to turn visitors into customers",
    icon: "🖥️"
  },
  {
    title: "Custom Portfolio Websites",
    description: "Showcase your work with elegant, professional portfolios",
    icon: "🎨"
  },
  {
    title: "eCommerce Development",
    description: "Complete online stores with secure payment integration",
    icon: "🛒"
  },
  {
    title: "UI/UX Enhancements",
    description: "Improve user experience and interface for better engagement",
    icon: "✨"
  },
  {
    title: "Speed Optimization",
    description: "Blazing fast websites that rank higher and convert better",
    icon: "⚡"
  },
  {
    title: "SEO Integration",
    description: "Built-in search engine optimization from the ground up",
    icon: "🔍"
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance and updates for your peace of mind",
    icon: "🛠️"
  }
];

// Process steps with icons
const processSteps = [
  { title: "Discovery Call", description: "We discuss your vision and requirements", icon: "💬" },
  { title: "Wireframing", description: "Creating the blueprint for your project", icon: "📐" },
  { title: "Design Approval", description: "Refining the visual identity together", icon: "🎨" },
  { title: "Development", description: "Bringing the design to life with code", icon: "💻" },
  { title: "Testing", description: "Ensuring perfection on all devices", icon: "🧪" },
  { title: "Launch & Support", description: "Going live with ongoing assistance", icon: "🚀" }
];

const WebDesignPage = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero with particle background */}
      <section className="relative text-center py-32 bg-gradient-to-br from-[#00B8DB] to-[#0085A1] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Web Design <span className="text-[#FFD700]">Masterpieces</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where <span className="font-semibold">innovation</span> meets <span className="font-semibold">execution</span> to create digital experiences that convert
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="/bookacall"
              className="inline-block bg-[#FFD700] hover:bg-[#FFC800] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio with hover effects */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Our <span className="text-[#00B8DB]">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Each project tells a story of challenges met and expectations exceeded
          </p>
        </motion.div>
        
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[
            { 
              title: "Knowvity", 
              image: knowvity, 
              link: "https://course-selling-web.onrender.com/",
              description: "Course selling platform with integrated payment solutions"
            },
            { 
              title: "Radhika Fashion", 
              image: radhikaorg, 
              link: "https://ecom-demo-0c3u.onrender.com/",
              description: "Fashion eCommerce with advanced filtering and cart system"
            },
            { 
              title: "Vijayaa Makeovers", 
              image: radhika, 
              link: "https://makeover-web-2.onrender.com/",
              description: "Beauty salon booking system with service catalog"
            },
            { 
              title: "Avva College", 
              image: avacollege, 
              link: "https://college-demo.onrender.com/",
              description: "Educational institution website with course management"
            }
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">{proj.title}</h3>
                      <p className="text-gray-300">{proj.description}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900">{proj.title}</h3>
                  <p className="text-gray-600 mt-2">{proj.description}</p>
                  <div className="mt-4 flex items-center text-[#00B8DB] font-medium">
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process with timeline effect */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Our <span className="text-[#00B8DB]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              A structured approach that ensures quality and efficiency at every stage
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#00B8DB] to-[#0085A1] transform -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`relative ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:mt-24'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-6 w-6 h-6 rounded-full bg-[#00B8DB] border-4 border-white transform -translate-y-1/2"
                    style={{ 
                      left: i % 2 === 0 ? 'calc(100% - 12px)' : '-12px',
                      boxShadow: '0 0 0 4px rgba(0, 184, 219, 0.2)'
                    }}
                  ></div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    <div className="mt-4 text-sm font-medium text-[#00B8DB]">
                      Step {i + 1}/{processSteps.length}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services with cards */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Comprehensive <span className="text-[#00B8DB]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            End-to-end solutions tailored to your business needs
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="text-5xl mb-6 group-hover:text-[#00B8DB] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials with rating */}
      <section className="bg-gradient-to-b from-white to-[#F8F9FA] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Client <span className="text-[#00B8DB]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Don't just take our word for it - hear from those who've worked with us
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">"{t.feedback}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-xl font-bold text-gray-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">
            Trusted by innovative brands
          </h2>
        </motion.div>
        <ClientCarousel />
      </section>

      {/* CTA with gradient */}
      <section className="relative text-center py-28 bg-gradient-to-r from-[#00B8DB] to-[#0085A1] text-white overflow-hidden">
        {/* Animated dots background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(30)].map((_, i) => (
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
            Ready to Elevate Your Digital Presence?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can transform your ideas into a high-performing website
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="/bookacall"
              className="inline-block bg-white text-[#00B8DB] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Book a Free Consultation
            </a>
            <a
              href="/portfolio"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#00B8DB] transition-all duration-300 transform hover:-translate-y-1"
            >
              See More Work
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;