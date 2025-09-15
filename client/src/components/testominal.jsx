import React from "react";
import { motion } from "framer-motion";
import body1 from "../assets/body1.jpg";
import body2 from "../assets/body2.jpg";
import body3 from "../assets/body3.jpg";
import body4 from "../assets/body4.jpg";

const testimonials = [
  {
    image: body1,
    text: "I lost 8kg in just 2 months with GYM Hub’s AI-powered meal plans and smart progress tracking. It feels like having a personal trainer in my pocket!",
    name: "Ritik Y.",
    role: "Software Engineer",
  },
  {
    image: body2,
    text: "As a beginner, I always felt lost in the gym. The tailored workouts and detailed tracking helped me stay consistent — and now I actually look forward to training.",
    name: "Sohan K.",
    role: "College Student",
  },
  {
    image: body3,
    text: "The gamified challenges kept me motivated. I completed the 30-day push-up challenge and gained real strength — and a new morning routine!",
    name: "Vikram P.",
    role: "Marketing Professional",
  },
  {
    image: body4,
    text: "No more confusion about diets. GYM Hub suggests meals based on my goals and lifestyle. I feel healthier and more energized than ever.",
    name: "Amit D.",
    role: "Fitness Enthusiast",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-purple-400"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Members Say
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-600/40 transition duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                className="w-42 h-42  object-cover border-4 border-purple-500 mb-4"
                src={t.image}
                alt={t.name}
              />
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                “{t.text}”
              </p>
              <h4 className="text-lg font-semibold text-purple-300">
                {t.name}
              </h4>
              <p className="text-sm text-gray-400">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
