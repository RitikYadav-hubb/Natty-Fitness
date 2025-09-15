import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500">Natty Fitness</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your all-in-one fitness companion — workouts, diet, and motivation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/exercise" className="hover:text-purple-400">
                Exercise
              </Link>
            </li>
            <li>
              <Link to="/diet" className="hover:text-purple-400">
                Diet Plans
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-purple-400">
                Signup
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-purple-400">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-purple-400">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-purple-400">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="hover:text-purple-400">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GYM Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
