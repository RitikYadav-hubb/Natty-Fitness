import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UpcomingChallenges = () => {
  return (
    <section className="relative bg-black text-white py-16 text-center">
    
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-purple-600"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Fitness Challenge
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 text-purple-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join our
          <span className="font-semibold text-purple-300">
            {" "}
            30-Day Push-Up Challenge{" "}
          </span>
          and compete with other members to test your endurance and strength.
          Track progress, unlock badges, and win exclusive rewards!
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            to="/signup"
            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200"
          >
            Join the Challenge
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingChallenges;
