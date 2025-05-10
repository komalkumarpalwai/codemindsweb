import React from 'react';
import { motion } from 'framer-motion';

const DigitalMarketingMainPage = () => {
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

  const services = [
    {
      title: "Research & Lead Generation",
      description: "We research and analyze your business to generate more leads, targeting your ideal audience for the best results.",
      icon: "🔍",
      image: "https://img.freepik.com/premium-photo/lead-generation-analysis-business-research-interest-concept-marketing-strategy-financial-technology_161452-1518.jpg"
    },
    {
      title: "Posters & Reels",
      description: "We create engaging posters and reels tailored to your brand. Get 8 posters and 8 reels each month to keep your content fresh and engaging.",
      icon: "🎨",
      image: "https://www.shutterstock.com/shutterstock/videos/3442555867/thumb/1.jpg?ip=x480"
    },
    {
      title: "Targeted Advertisements",
      description: "We run targeted Meta Ads (Facebook & Instagram) and Google Ads to ensure your brand reaches the right audience.",
      icon: "📢",
      image: "https://media.istockphoto.com/id/503554754/photo/marketing-segmentation.jpg?s=612x612&w=0&k=20&c=fZFkbRZKNEq_AUx-Tm-kXO46frGM9bpW_T_oBSPlm4U="
    },
    {
      title: "Social Media Management",
      description: "We handle your social media accounts, ensuring consistent growth and engagement across platforms like Facebook, Instagram, and more.",
      icon: "📱",
      image: "https://wallpapers.com/images/hd/social-media-pictures-icpyg23okg9ywqjk.jpg"
    },
    {
      title: "Monthly Reports",
      description: "Receive detailed monthly reports to track the performance of your business and see how your marketing efforts are making an impact.",
      icon: "📊",
      image: "https://media.whatagraph.com/Social_media_monthly_report_4843fb2f7b.webp"
    }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section with Particles */}
      <section className="relative text-center py-32  bg-gradient-to-br from-[#00B8DB] to-[#0085A1] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
            transition={{ duration: 0.8 }}
          >
            Digital Marketing <span className="text-[#FFD700]">Solutions</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform your online presence with our <span className="font-semibold">data-driven</span> marketing strategies that <span className="font-semibold">convert</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-block bg-[#FFD700] hover:bg-[#FFC800] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Our <span className="text-[#00B8DB]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </motion.div>
        
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-4xl absolute top-6 right-6 bg-[#00B8DB] text-white p-3 rounded-lg">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#00B8DB] to-[#0085A1] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">200%</div>
              <p className="text-lg">Average ROI Increase</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Satisfied Clients</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
              <p className="text-lg">Monthly Impressions</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg">Campaign Monitoring</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
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
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-lg italic mb-6">
              "Codeminds transformed our digital presence completely. Within 3 months, our leads increased by 300% and our social media engagement skyrocketed. Their strategic approach and creative content made all the difference for our business."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-xl font-bold text-gray-600">
                S
              </div>
              <div>
                <p className="font-bold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">CEO, Bloom Cosmetics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-center py-28 bg-gradient-to-r from-[#00B8DB] to-[#0085A1] text-white overflow-hidden">
        {/* Animated dots background */}
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
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help your business grow with our proven marketing strategies
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="/contact"
              className="inline-block bg-white text-[#00B8DB] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get a Free Consultation
            </a>
            <a
              href="/portfolio"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#00B8DB] transition-all duration-300 transform hover:-translate-y-1"
            >
              See Our Work
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingMainPage;