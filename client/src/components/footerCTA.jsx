import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gym from "../assets/gym.mp4";

const FooterCTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white ">
      <video src={gym} autoPlay loop muted playsInline className=""></video>
      <div className="max-w-5xl mx-auto px-6 text-center absolute top-40 inset-0">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Fitness Journey?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Whether you’re just starting out or chasing your next milestone, GYM
          Hub gives you the tools, community, and motivation to succeed.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            to="/signup"
            className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-purple-700 transition duration-200"
          >
            Start Free Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
