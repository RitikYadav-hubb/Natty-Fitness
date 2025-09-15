import React from "react";
import { motion } from "framer-motion";
import gym from "../assets/gym.mp4";

const Contact = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        src={gym}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center ">
        <div className="text-center text-white space-y-4 border-2 border-purple-600 rounded-2xl p-5">
          <h2 className="text-3xl md:text-5xl font-bold"> Contact Us 📞</h2>
          <p className="text-lg md:text-xl">Email: support@gymhub.com</p>
          <p className="text-lg md:text-xl">Phone: +91 0000000000</p>
          <p className="text-lg md:text-xl">Address: Bhopal, Madhya Pradesh</p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
