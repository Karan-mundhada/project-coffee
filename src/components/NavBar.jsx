import React, { useState, useEffect } from "react";
import {
  Coffee,
  ShoppingCart,
  User,
  ShoppingBag,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll event to change navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-white ${
        isScrolled ? "bg-blue-900 bg-opacity-80" : "bg-blue-900"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left side: navigation links (Shop, About) */}
        <nav className="flex-1 flex justify-end space-x-12">
          <Link to="/shop" className="hover:text-blue-300 transition-colors">
            <ShoppingBag className="inline-block mr-2" size={24} />
            Shop
          </Link>
          <Link to="/about" className="hover:text-blue-300 transition-colors">
            <Store className="inline-block mr-2" size={24} />
            About
          </Link>
        </nav>

        {/* Center: Logo */}
        <div className="flex-1 text-center">
          <Link
            to="/"
            className=" hover:text-blue-300 text-4xl font-bold flex items-center justify-center"
          >
            <Coffee className="inline-block mr-2" sixe={32} />
            BrewMaster
          </Link>
        </div>

        {/* Right side: Cart and Login */}
        <div className="flex-1 flex justify-start space-x-12">
          <Link
            to="/cart"
            className="hover:text-blue-300 px-2 transition-colors"
          >
            <ShoppingCart className="inline-block mr-2" size={24} />
            Cart
          </Link>
          <Link to="/auth" className="hover:text-blue-300 transition-colors">
            <User className="inline-block mr-2" size={24} />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-blue-900 text-white flex flex-col items-center space-y-4 py-4">
          <li>
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default NavBar;