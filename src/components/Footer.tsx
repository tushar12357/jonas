import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-white font-bold text-xl tracking-wider">PROJECT ULTIMATE</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your body and mind with world-class coaching and personalized 
              training programs designed to help you achieve your ultimate potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/why-us" className="text-gray-300 hover:text-yellow-400 transition-colors">Why Us?</Link></li>
              <li><Link to="/personal-training" className="text-gray-300 hover:text-yellow-400 transition-colors">Personal Training</Link></li>
              <li><Link to="/online-transformation" className="text-gray-300 hover:text-yellow-400 transition-colors">Online Transformation</Link></li>
              <li><Link to="/client-results" className="text-gray-300 hover:text-yellow-400 transition-colors">Client Results</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

        
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Project Ultimate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;