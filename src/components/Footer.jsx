import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                nx<span className="text-primary">volta</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Advanced Battery Energy Storage Systems (BESS) for a sustainable and resilient energy future.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#bess" className="hover:text-primary transition-colors">What is BESS?</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#products" className="hover:text-primary transition-colors">Commercial BESS</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Industrial BESS</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Residential Storage</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>Adajan, Surat, Gujarat</li>
              <li><a href="mailto:nxvolta.energy@gmail.com" className="hover:text-primary transition-colors">nxvolta.energy@gmail.com</a></li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs text-slate-600 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} nxvolta Energy. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
