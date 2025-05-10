import React from "react";
import { motion } from "framer-motion";
import radhika from "../assets/radhika.jpeg";
import radhikaorg from "../assets/radhikaorg.png";
import avacollege from "../assets/avacollege.jpeg";
import knowvity from "../assets/knowvity.png";

const ClientCarousel = () => {
  const partners = [
    { name: "Knowvity", url: "http://www.knowvity.com/" },
    { name: "Radhika Fashion", url: "http://www.radhikarajpurohit.com/" },
    { name: "Vijayaa Makeovers", url: "https://www.vijayaamakeovers.com/" },
 { name: "Knowvity", url: "http://www.knowvity.com/" },
    { name: "Radhika Fashion", url: "http://www.radhikarajpurohit.com/" },
   { name: "Vijayaa Makeovers", url: "https://www.vijayaamakeovers.com/" },
  ];

  const timelineData = [
    {
      title: "Knowvity",
      date: "Jan 2025",
      description:
        "Premium coding platform with animated homepage and course showcase.",
      imageUrl: knowvity,
      link: "http://www.knowvity.com/",
    },
    {
      title: "Radhika Fashion",
      date: "Feb 2025",
      description:
        "Fully responsive fashion eCommerce website using MERN stack.",
      imageUrl: radhikaorg,
      link: "http://www.radhikarajpurohit.com/",
    },
    {
      title: "Vijayaa Makeovers",
      date: "Mar 2025",
      description:
        "Salon booking system with category-wise services and admin panel.",
      imageUrl: radhika,
      link: "https://www.vijayaamakeovers.com/",
    },
    {
      title: "Avva college",
      date: "Mar 2025",
      description: "A premium website for avva college",
      imageUrl: avacollege,
      link: "https://college-demo.onrender.com/",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 overflow-hidden  ClientCarousel-fornav" id="web-design">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Carousel */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Trusted Partners
        </h2>

        <div className="relative overflow-hidden group">
          <div className="whitespace-nowrap w-[200%] animate-marquee group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="inline-block mx-8 lg:mx-12"
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-700 text-xl font-semibold transition-all duration-300 hover:underline decoration-2 underline-offset-4"
                >
                  {partner.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Codeminds past work!
          </motion.h2>

          <div className="relative max-w-6xl mx-auto pb-20">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative mb-16 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2 z-10" />

                {/* Timeline Card */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full max-w-md p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? "ml-8 mr-4" : "mr-8 ml-4"
                  }`}
                >
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-start gap-6`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                    <div
                      className={`${
                        index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      <p className="text-sm text-indigo-600 mb-2">
                        {item.date}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}

            {/* See More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            >
              <a
                href="#"
                className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 text-lg font-semibold"
              >
                And many more
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom animation style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            display: inline-block;
            white-space: nowrap;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default ClientCarousel;
