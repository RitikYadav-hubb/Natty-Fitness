import React from "react";
import { motion } from "framer-motion";
import protein from "../assets/protein.png";

const Protein = () => {
  return (
    <div className=" py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center grid items-center grid-cols-2 "
      >
        <img className="h-70" src={protein} alt="" />
        <h1 className="text-purple-700 text-5xl">50% Off ON Best Deals</h1>
        <button className="w-40 bg-purple-800 rounded-lg h-10 hover:bg-purple-900 mx-164">
          Check now
        </button>
      </motion.div>
    </div>
  );
};

export default Protein;
