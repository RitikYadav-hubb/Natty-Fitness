import React, { useState } from "react";
import Footer from "../components/footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
        <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition duration-200 font-semibold py-2 px-4 rounded-lg shadow-md"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
