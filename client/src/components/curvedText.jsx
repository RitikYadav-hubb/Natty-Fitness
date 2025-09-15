import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

function CurvedText() {
  const words = [
    { name: "No Pain No Gain", image: p1 },
    {
      name: "Motivation is what gets you started Discipline is what keeps you going",
      image: p2,
    },
    {
      name: "Push yourself, because no one else is going to do it for you",
      image: p3,
    },
  ];

  return (
    <div className="bg-black">
      <div className="flex justify-center items-center h-30  overflow-hidden  py-12 max-w-8xl mx-auto px-6 ">
        <motion.div
          animate={{ x: ["0%", "-200%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className=" whitespace-nowrap flex gap-10 w-screen"
        >
          {[...words, ...words].map((word, i) => (
            <div key={i} className="  flex m-8 gap-2 items-center">
              <img
                src={word.image}
                alt={word.name}
                className="h-16 w-16 mb-2 mt-3"
              />
              <h1 className="text-5xl font-bold text-gray-600 duration-200 hover:text-gray-300">
                {word.name}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CurvedText;
