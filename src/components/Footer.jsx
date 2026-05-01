import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-navy pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6 bg-white p-2 rounded-xl shadow-lg">
              <img src={logo} alt="NXVOLTA Logo" className="h-10 md:h-12 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Advanced Battery Energy Storage Systems (BESS) for a sustainable and resilient energy future.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/#bess" className="hover:text-primary transition-colors">What is BESS?</Link></li>
              <li><Link to="/#solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/products" className="hover:text-primary transition-colors">Commercial BESS</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Industrial BESS</Link></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span>Surat, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:nxvolta.energy@gmail.com" className="hover:text-primary transition-colors">nxvolta.energy@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} nxvolta Energy. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
