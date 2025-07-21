import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-white font-bold text-xl tracking-wider">
                {" "}
                <img src="/title.png" alt="title" className="h-16 w-full" />
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your body and mind with world-class coaching and
              personalized training programs designed to help you achieve your
              ultimate potential.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#ecf86e] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ecf86e] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ecf86e] transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/why-us"
                  className="text-gray-300 hover:text-[#ecf86e] transition-colors"
                >
                  Why Us?
                </Link>
              </li>
              <li>
                <Link
                  to="/personal-training"
                  className="text-gray-300 hover:text-[#ecf86e] transition-colors"
                >
                  Personal Training
                </Link>
              </li>
              <li>
                <Link
                  to="/online-transformation"
                  className="text-gray-300 hover:text-[#ecf86e] transition-colors"
                >
                  Online Transformation
                </Link>
              </li>
              <li>
                <Link
                  to="/client-results"
                  className="text-gray-300 hover:text-[#ecf86e] transition-colors"
                >
                  Client Results
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#ecf86e] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
