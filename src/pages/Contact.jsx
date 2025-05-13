import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiYoutube, FiPhone } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    help: '',
    message: '',
    agree: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // State to track submission success
  const [isError, setIsError] = useState(false); // State to track submission error

  const services = [
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Enterprise Software'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.match(/\S+@\S+\.\S+/)) newErrors.email = 'Invalid email';
    if (!formData.help.trim()) newErrors.help = 'Please describe how we can help';
    if (!formData.agree) newErrors.agree = 'You must agree to continue';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setIsSuccess(false); // Reset success state before sending

      // Prepare the template parameters
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        help: formData.help,
        message: formData.message
      };

      // Send email using EmailJS
      emailjs.send(
        'service_71ajjcl', // Replace with your EmailJS service ID
        'template_qdih36l', // Replace with your EmailJS template ID
        templateParams,
        'EFgyQlCLVT-9UjQiG' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('Email sent successfully', response);
        setIsSubmitting(false);
        setIsSuccess(true); // Set success state to true
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          help: '',
          message: '',
          agree: false
        });
      })
      .catch((error) => {
        console.error('Error sending email', error);
        setIsSubmitting(false);
        setIsError(true); // Set error state to true
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Contact Our Sales Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's talk about how CodeMinds can help your team work better.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">First Name *</label>
                <input
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
                {errors.firstName && <p className="text-red-400 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Last Name *</label>
                <input
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
                {errors.lastName && <p className="text-red-400 mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Additional Form Fields */}
            <div>
              <label className="block text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Company Name</label>
              <input
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
            </div>

            {/* Additional Fields for Services and Help */}
            <div>
              <label className="block text-gray-300 mb-2">Services you're interested in</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">How can we help? *</label>
              <textarea
                value={formData.help}
                onChange={(e) => setFormData({...formData, help: e.target.value})}
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none h-32"
              />
              {errors.help && <p className="text-red-400 mt-1">{errors.help}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Anything else?</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none h-32"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                checked={formData.agree}
                onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                className="mt-1 mr-2"
              />
              <span className="text-gray-300">
                I agree to CodeMinds' sending marketing communications related to CodeMinds
              </span>
              {errors.agree && <p className="text-red-400 mt-1">{errors.agree}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          </motion.form>

          {/* Confirmation Message */}
          {isSuccess && (
            <div className="mt-8 p-6 bg-green-500 text-white rounded-lg text-center">
              <h3 className="text-xl font-semibold">Thank you for reaching out!</h3>
              <p>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          )}

          {/* Error Message */}
          {isError && (
            <div className="mt-8 p-6 bg-red-500 text-white rounded-lg text-center">
              <h3 className="text-xl font-semibold">Something went wrong</h3>
              <p>There was an error sending your message. Please try again later.</p>
            </div>
          )}

          {/* Connect Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Connect with us</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FiPhone className="text-cyan-500 text-2xl" />
                  <span>+91 93902 28526</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FiLinkedin className="text-cyan-500 text-2xl" />
                  <span>LinkedIn</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FiInstagram className="text-cyan-500 text-2xl" />
                  <span>Instagram</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FiYoutube className="text-cyan-500 text-2xl" />
                  <span>Youtube</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
