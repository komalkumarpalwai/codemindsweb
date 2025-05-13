import React, { useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookMeetingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
    time: "",
    duration: "30",
    purpose: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      slots.push(`${hour.toString().padStart(2, "0")}:00`);
      if (hour !== 18) slots.push(`${hour.toString().padStart(2, "0")}:30`);
    }
    return slots;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      date: formData.date ? formData.date.toDateString() : "",
      time: formData.time,
      duration: formData.duration,
      message: formData.purpose,
    };

     emailjs.send(
        'service_71ajjcl', // Replace with your EmailJS service ID
        'template_qdih36l', // Replace with your EmailJS template ID
        templateParams,
        'EFgyQlCLVT-9UjQiG' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          setIsLoading(false);
        },
        (err) => {
          console.log("FAILED...", err);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto animate-fade-in mt-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Schedule Your Session
          </h2>
          <p className="text-gray-300 text-lg">
            Let's discuss your next big idea! Choose a time that works best for you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center p-8 bg-gray-800 rounded-2xl border border-cyan-400/20 shadow-2xl shadow-cyan-400/10">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Booking Confirmed!
            </h3>
            <p className="text-gray-300">
              A calendar invite has been sent to your email. We look forward to our meeting!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cyan-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-cyan-300">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-cyan-300">Date</label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                  placeholderText="Select date"
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-cyan-300">Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all appearance-none"
                  required
                >
                  <option value="">Select time</option>
                  {generateTimeSlots().map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-cyan-300">Duration</label>
              <div className="grid grid-cols-3 gap-4">
                {['30', '45', '60'].map((duration) => (
                  <button
                    key={duration}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, duration }))}
                    className={`p-3 rounded-lg text-center border ${
                      formData.duration === duration
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-gray-700 hover:border-cyan-400/40 hover:bg-cyan-400/5'
                    } transition-all`}
                  >
                    {duration} mins
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-cyan-300">
                Meeting Purpose
              </label>
              <textarea
                name="purpose"
                rows="4"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                placeholder="Describe the purpose of our meeting..."
                value={formData.purpose}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-400/90 hover:to-blue-500/90 text-gray-900 font-bold transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Scheduling...' : 'Confirm Meeting'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookMeetingPage;