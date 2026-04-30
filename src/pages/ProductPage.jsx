import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
              Designed for different scales of energy demand. Optimized for performance and longevity.
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
          className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group border-r border-slate-100"
        >
          <div className="relative z-10 max-w-md mx-auto md:mx-0">
            <h2 className="text-8xl md:text-[10rem] font-black text-navy/5 mb-[-2rem] md:mb-[-4rem] tracking-tighter select-none">500</h2>
            <div className="relative">
              <h3 className="text-5xl md:text-7xl font-black text-navy mb-4 tracking-tighter">500 <span className="text-primary">kW</span></h3>
              <p className="text-slate-500 font-bold text-xl mb-12">For commercial and backup applications</p>
              
              <ul className="space-y-6 mb-16">
                {['~1 MWh Capacity', '≥ 90% Efficiency', 'Compact design'].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-4 text-navy font-bold text-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/#contact" className="inline-flex items-center space-x-4 px-8 py-4 bg-navy text-white rounded-full font-bold hover:bg-primary transition-all duration-300 group/btn">
                <span>View Details</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="absolute bottom-10 right-10 w-64 h-64 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110">
             <img src={commercialImg} alt="500kW BESS" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Right Side: 1 MW (Emphasized) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-navy p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
          
          <div className="relative z-10 max-w-md mx-auto md:mx-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest mb-8 backdrop-blur-sm">
              Recommended / Scalable
            </div>
            <h2 className="text-8xl md:text-[10rem] font-black text-white/5 mb-[-2rem] md:mb-[-4rem] tracking-tighter select-none">1000</h2>
            <div className="relative">
              <h3 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">1 <span className="text-primary">MW</span></h3>
              <p className="text-slate-400 font-bold text-xl mb-12">For industrial and large-scale applications</p>
              
              <ul className="space-y-6 mb-16">
                {['2–4 MWh Capacity', '≥ 90–95% Efficiency', 'High scalability'].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-4 text-white font-bold text-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/#contact" className="inline-flex items-center space-x-4 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-navy transition-all duration-300 group/btn">
                <span>View Details</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="absolute bottom-10 right-10 w-80 h-80 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110">
             <img src={industrialImg} alt="1MW BESS" className="w-full h-full object-contain" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProductPage;
