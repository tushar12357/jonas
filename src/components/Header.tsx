import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl tracking-wider">
                <img src="/title.png" alt="title" className="h-16 w-full"/>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/why-us"
              className={`transition-colors font-medium ${
                isActive("/why-us")
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Why Us?
            </Link>
            <Link
              to="/personal-training"
              className={`transition-colors font-medium ${
                isActive("/personal-training")
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Personal Training
            </Link>
            <Link
              to="/online-transformation"
              className={`transition-colors font-medium ${
                isActive("/online-transformation")
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Online Transformation
            </Link>
            <Link
              to="/client-results"
              className={`transition-colors font-medium ${
                isActive("/client-results")
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Client Results
            </Link>
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              ENQUIRE NOW
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-20 left-0 right-0 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                to="/why-us"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us?
              </Link>
              <Link
                to="/personal-training"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Personal Training
              </Link>
              <Link
                to="/online-transformation"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Online Transformation
              </Link>
              <Link
                to="/client-results"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Results
              </Link>
              <Link
                to="/contact"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                ENQUIRE NOW
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
