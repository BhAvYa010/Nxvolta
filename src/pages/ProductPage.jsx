import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import commercialImg from '../assets/images/commercial-unit.jpg';
import industrialImg from '../assets/images/industrial-container.jpg';

const ProductPage = () => {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Section Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black text-navy mb-6 tracking-tighter"
            >
              Our Energy <span className="text-primary">Storage</span> Systems
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-xl font-medium"
            >
              Tailored solutions for every scale of energy demand. Optimized for performance, longevity, and sustainability.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Split Screen Section */}
      <div className="flex flex-col md:flex-row min-h-[800px] w-full overflow-hidden">
        
        {/* Left Side: 500 kW */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white p-8 xs:p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group border-r border-slate-100"
        >
          <div className="relative z-10 max-w-md mx-auto md:mx-0">
            <h2 className="text-6xl xs:text-8xl md:text-[10rem] font-black text-navy/5 mb-[-1.5rem] xs:mb-[-2rem] md:mb-[-4rem] tracking-tighter select-none">500</h2>
            <div className="relative">
              <h3 className="text-4xl xs:text-5xl md:text-7xl font-black text-navy mb-4 tracking-tighter">500 <span className="text-primary">kW</span></h3>
              <p className="text-slate-500 font-bold text-lg xs:text-xl mb-8 xs:mb-12 uppercase tracking-wide">For Commercial & Backup Solutions</p>
              
              <ul className="space-y-4 xs:space-y-6 mb-10 xs:mb-16">
                {['~1 MWh Energy Capacity', '≥ 90% Round-trip Efficiency', 'Modular & Compact Design', 'Seamless Grid Integration'].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 xs:space-x-4 text-navy font-bold text-base xs:text-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link to="/?intent=quote&product=500kw#contact" className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-navy text-white rounded-xl font-black hover:bg-primary transition-all duration-300 shadow-xl shadow-navy/10 uppercase tracking-widest text-xs">
                  <Zap size={18} />
                  <span>Get Best Quote</span>
                </Link>
                <Link to="/?intent=brochure&product=500kw#contact" className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white border-2 border-navy/10 text-navy rounded-xl font-black hover:bg-navy hover:text-white transition-all duration-300 uppercase tracking-widest text-xs">
                  <Download size={18} />
                  <span>Download Brochure</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="absolute bottom-6 right-6 xs:bottom-10 xs:right-10 w-48 xs:w-64 h-48 xs:h-64 opacity-5 xs:opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110">
             <img src={commercialImg} alt="500kW BESS" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Right Side: 1 MW (Emphasized) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-navy p-8 xs:p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
          
          <div className="relative z-10 max-w-md mx-auto md:mx-0">
            <div className="inline-block px-3 xs:px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] xs:text-xs font-black uppercase tracking-widest mb-6 xs:mb-8 backdrop-blur-sm">
              Industrial / Scale-Ready
            </div>
            <h2 className="text-6xl xs:text-8xl md:text-[10rem] font-black text-white/5 mb-[-1.5rem] xs:mb-[-2rem] md:mb-[-4rem] tracking-tighter select-none">1000</h2>
            <div className="relative">
              <h3 className="text-4xl xs:text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">1 <span className="text-primary">MW</span></h3>
              <p className="text-slate-400 font-bold text-lg xs:text-xl mb-8 xs:mb-12 uppercase tracking-wide">For Industrial & Utility Infrastructure</p>
              
              <ul className="space-y-4 xs:space-y-6 mb-10 xs:mb-16">
                {['2–4 MWh High Capacity', '≥ 90–95% Peak Efficiency', 'High Power Scalability', 'Advanced Thermal Management'].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 xs:space-x-4 text-white font-bold text-base xs:text-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link to="/?intent=quote&product=1mw#contact" className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary text-white rounded-xl font-black hover:bg-white hover:text-navy transition-all duration-300 shadow-xl shadow-primary/20 uppercase tracking-widest text-xs">
                  <Zap size={18} />
                  <span>Get Best Quote</span>
                </Link>
                <Link to="/?intent=brochure&product=1mw#contact" className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-xl font-black hover:bg-white hover:text-navy transition-all duration-300 uppercase tracking-widest text-xs backdrop-blur-sm">
                  <Download size={18} />
                  <span>Download Brochure</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="absolute bottom-6 right-6 xs:bottom-10 xs:right-10 w-56 xs:w-80 h-56 xs:h-80 opacity-5 xs:opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110">
             <img src={industrialImg} alt="1MW BESS" className="w-full h-full object-contain" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProductPage;
