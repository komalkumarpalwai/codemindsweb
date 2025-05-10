import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin
} from 'react-icons/fi';

const PremiumFooter = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    hover: { 
      color: '#01C4C5',
      transition: { duration: 0.2 }
    }
  };

  const socialLinks = [
    { icon: <FiInstagram />, url: "https://www.instagram.com/codemindswebservices/", name: "Instagram" },
    { icon: <FiYoutube />, url: "https://www.youtube.com/@raoopvt", name: "YouTube" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/company/codeminds-web-services/", name: "LinkedIn" }
  ];

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-16 px-4"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <motion.h3 
              variants={itemVariants}
              whileHover="hover"
              className="text-2xl font-bold mb-4"
            >
              Codeminds
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mb-6"
            >
              Empowering learners worldwide with accessible, high-quality education.
            </motion.p>
            
            <div className="space-y-3 mb-6">
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center"
              >
                <FiMail className="mr-3" />
                <a href="mailto:codemindswebservices@gmail.com">codemindswebservices@gmail.com</a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center"
              >
                <FiPhone className="mr-3" />
                <div>
                  <a href="tel:9390228526">93902 28526</a>
                  <span className="mx-2">/</span>
                  <a href="tel:8142285266">81422 85266</a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                className="flex items-start"
              >
                <FiMapPin className="mr-3 mt-1 flex-shrink-0" />
                <span>Brindavan Colony, Ibrahimpatnam-501506, Rangareddy, Hyderabad, TG.</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  whileHover={{ 
                    color: '#01C4C5',
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  className="text-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Founder Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover="hover"
              variants={itemVariants}
              className="text-xl font-bold mb-4"
            >
              Srinivas Rao
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mb-4"
            >
              Founder
            </motion.p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover="hover"
              variants={itemVariants}
              className="text-xl font-bold mb-4"
            >
              SERVICES
            </motion.h3>
            
            <ul className="space-y-3 text-gray-300">
              <motion.li 
                variants={itemVariants}
                whileHover="hover"
              >
                Branding Page
                <div className="text-sm mt-1">💬 93902 28526 / 81422 85266</div>
              </motion.li>
              
              <motion.li 
                variants={itemVariants}
                whileHover="hover"
              >
                Ecommerce
                <div className="text-sm mt-1">💬 codemindswebservices</div>
              </motion.li>
              
              <motion.li 
                variants={itemVariants}
                whileHover="hover"
              >
                Website Creation
                <div className="text-sm mt-1">💬 codemindswebservices@gmail.com</div>
              </motion.li>
              
              <motion.li 
                variants={itemVariants}
                whileHover="hover"
              >
                Digital Marketing Using AI
              </motion.li>
              
              <motion.li 
                variants={itemVariants}
                whileHover="hover"
              >
                Animation Videos
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-gray-700 my-8"
        />

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Codeminds. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default PremiumFooter;
