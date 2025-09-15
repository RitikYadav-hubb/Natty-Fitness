import React from "react";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import dumbell from "../assets/dumbell.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-black px-6 py-12 md:py-20">
      {/* Hero Image */}
      <img
        src={hero}
        alt="hero"
        className="w-full md:w-1/2 max-w-lg mb-8 md:mb-0 rounded-lg shadow-lg object-contain"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-200 md:ml-12 max-w-xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Why <span className="text-purple-600">Choose</span> Us?
        </h1>
        <ul className="space-y-3 text-base md:text-lg leading-relaxed">
          <li>
            <span className="text-purple-700">➢</span> Tailored workouts that
            match your fitness level.
          </li>
          <li>
            <span className="text-purple-700">➢</span> Balanced meal plans
            designed for energy & results.
          </li>
          <li>
            <span className="text-purple-700">➢</span> Smart progress tracking
            with insights that keep you motivated.
          </li>
          <li>
            <span className="text-purple-700">➢</span> AI recommendations to
            fine-tune your diet and exercise.
          </li>
          <li>
            <span className="text-purple-700">➢</span> A community-driven hub
            where fitness meets knowledge.
          </li>
        </ul>
      </motion.div>

      {/* Animated Dumbbell */}
      <motion.img
        src={dumbell}
        alt="dumbbell"
        className="absolute bottom-10 right-10 h-16 md:h-20 opacity-80"
        animate={{ y: [0, -40, 0], rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </div>
  );
};

export default Hero;
