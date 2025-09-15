import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Diet", path: "/diet" },
    { name: "Exercise", path: "/exercise" },
    { name: "Protein", path: "/protein" },
    { name: "Contact", path: "/contact" },
    { name: "Signup", path: "/signup" },
  ];

  // handle scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // hide when scrolling down
    } else {
      setShow(true); // show when scrolling up
    }
    setLastScrollY(window.scrollY);

    // solid background after scrolling 50px
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-black/90"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="text-xl font-bold text-white">
            Natty <span className="text-purple-300">Fitness</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="hover:underline underline-offset-8 text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-black/95">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="block hover:underline underline-offset-8 text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
