import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiClock, FiCalendar, FiUser, FiMail } from 'react-icons/fi';

const BookMeetingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null,
    time: '',
    duration: '30',
    purpose: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      ['00', '30'].forEach(minutes => {
        const time = `${hour.toString().padStart(2, '0')}:${minutes}`;
        slots.push(time);
      });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/\S+@\S+\.\S+/)) newErrors.email = 'Invalid email';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.purpose.trim()) newErrors.purpose = 'Purpose is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto mt-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Schedule a Meeting
          </h1>
          <p className="text-xl text-gray-300">Book a time that works best for you</p>
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Personal Info */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <FiUser className="mr-2 text-cyan-400" /> Name *
                </label>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
                {errors.name && <p className="text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <FiMail className="mr-2 text-cyan-400" /> Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
                {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Meeting Details */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <FiCalendar className="mr-2 text-cyan-400" /> Date *
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => setFormData({...formData, date})}
                  minDate={new Date()}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none text-white"
                  placeholderText="Select date"
                />
                {errors.date && <p className="text-red-400 mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <FiClock className="mr-2 text-cyan-400" /> Time *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none text-white"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && <p className="text-red-400 mt-1">{errors.time}</p>}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Duration</label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="30">30 Minutes</option>
                  <option value="60">60 Minutes</option>
                  <option value="90">90 Minutes</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Meeting Purpose *</label>
                <textarea
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none h-32"
                  placeholder="Briefly describe the purpose of the meeting"
                />
                {errors.purpose && <p className="text-red-400 mt-1">{errors.purpose}</p>}
              </div>
            </div>

            <div className="md:col-span-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Schedule Meeting
              </motion.button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-8 bg-gray-800/30 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Meeting Scheduled!</h2>
            <p className="text-xl text-gray-300 mb-6">
              A confirmation has been sent to your email
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Date: {formData.date?.toLocaleDateString()}</p>
              <p>Time: {formData.time}</p>
              <p>Duration: {formData.duration} minutes</p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-6 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              Schedule Another Meeting
            </button>
          </motion.div>
        )}

        <div className="mt-12 text-center text-gray-400">
          <p>Need immediate assistance? Call +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default BookMeetingPage;
