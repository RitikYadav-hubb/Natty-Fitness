import React from "react";
import { Link } from "react-router-dom";
import header from "../assets/header.jpg";

const Header = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <img
        src={header}
        alt="Gym background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 underline decoration-4 decoration-purple-400 underline-offset-8 pb-6 mb-8">
          Welcome to GYM Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          Transform your body, fuel your mind, and push your limits. From
          customized workouts to AI-powered diet plans, GYM Hub is your
          all-in-one partner in achieving peak fitness.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition duration-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
