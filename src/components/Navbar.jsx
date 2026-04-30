import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="NXVOLTA Logo" 
            className={`h-12 md:h-14 w-auto transition-all duration-300 ${!scrolled && location.pathname === '/' ? 'brightness-110 contrast-110 rounded-lg' : ''}`} 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`${scrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-primary' : 'text-slate-200 hover:text-white'} transition-colors font-bold uppercase tracking-widest text-sm`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled || location.pathname !== '/' ? 'text-navy' : 'text-white'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 py-6 px-4 space-y-4 shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-navy hover:text-primary transition-colors text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block btn-primary text-center"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
