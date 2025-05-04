import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFile, FiSend } from 'react-icons/fi';

const InternshipApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    resume: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = 'Invalid name format';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.interest.trim()) {
      newErrors.interest = 'Please describe your interest';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.resume.type)) {
      newErrors.resume = 'Only PDF/DOCX files allowed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          interest: '',
          resume: null
        });
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 mt-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Internship Application
          </h1>
          <p className="text-xl text-gray-300">
            Join our dynamic team and gain valuable experience!
          </p>
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-cyan-400 font-semibold">
              ₹5,000 per month (negotiable based on skills)
            </p>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-gray-300 mb-2">Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Area of Interest:</label>
            <textarea
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none h-32"
              placeholder="Tell us why you'd like to intern with us..."
            />
            {errors.interest && <p className="text-red-400 mt-1">{errors.interest}</p>}
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Resume (PDF or DOCX):</label>
            <label className="flex items-center p-3 bg-gray-800 rounded-lg cursor-pointer">
              <FiFile className="mr-2 text-cyan-400" />
              <span className="text-gray-400">
                {formData.resume ? formData.resume.name : 'Choose file...'}
              </span>
              <input
                type="file"
                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
            </label>
            {errors.resume && <p className="text-red-400 mt-1">{errors.resume}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-cyan-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-600 transition-colors"
          >
            <FiSend />
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default InternshipApplication;