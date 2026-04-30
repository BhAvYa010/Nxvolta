import React from 'react';
import { motion } from 'framer-motion';
import { MonitorCheck, Zap, Settings, Truck, ArrowRight, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const deliveryFeatures = [
    {
      icon: <MonitorCheck className="w-8 h-8 text-primary" />,
      title: "Smart Monitoring",
      desc: "Cloud-based dashboard for real-time tracking, health diagnostics, and performance reports."
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "High Efficiency",
      desc: "Maximum energy conversion with minimal round-trip losses using top-tier battery chemistry."
    },
    {
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "Custom Deployments",
      desc: "Modular designs tailored to your specific voltage, power, and energy requirements."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-500" />,
      title: "End-to-End Service",
      desc: "From initial site assessment and design to installation, testing, and lifetime maintenance."
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container-custom">
        {/* Product Showcase Table */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 text-navy">Product <span className="text-primary">Showcase</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Compare our flagship industrial and commercial storage solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-card overflow-hidden mb-24 border-navy/10 shadow-2xl">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-4 sm:p-8 font-bold w-1/3 border-b border-white/10 text-xs sm:text-base md:text-lg lg:text-xl">Features</th>
                    <th className="p-4 sm:p-8 font-black text-center border-l border-white/10 w-1/3 text-primary text-lg sm:text-2xl md:text-3xl tracking-tighter uppercase">500 kW</th>
                    <th className="p-4 sm:p-8 font-black text-center border-l border-white/10 w-1/3 text-primary text-lg sm:text-2xl md:text-3xl tracking-tighter uppercase">1 MW</th>
                  </tr>
                </thead>
                <tbody className="text-navy divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-xs sm:text-base md:text-lg">Power</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-bold text-xs sm:text-lg md:text-xl">500 kW</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-bold text-xs sm:text-lg md:text-xl">1 MW</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-xs sm:text-base md:text-lg">Energy Capacity</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-medium text-xs sm:text-base md:text-lg">~1 MWh</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-medium text-xs sm:text-base md:text-lg">~2–4 MWh</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-xs sm:text-base md:text-lg">Efficiency</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-medium text-xs sm:text-base md:text-lg">≥ 90%</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-medium text-xs sm:text-base md:text-lg">≥ 90–95%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-xs sm:text-base md:text-lg">Use Case</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-medium text-xs sm:text-base md:text-lg whitespace-nowrap uppercase tracking-tight">Commercial / Backup</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-medium text-xs sm:text-base md:text-lg whitespace-nowrap uppercase tracking-tight">Industrial / Utility</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-xs sm:text-base md:text-lg">Scalability</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-medium text-xs sm:text-base md:text-lg">Limited</td>
                    <td className="p-4 sm:p-6 text-center border-l border-slate-200 font-black text-primary text-xs sm:text-lg md:text-xl uppercase">High</td>
                  </tr>
                  
                  {/* Actions Row */}
                  <tr className="bg-slate-50/80">
                    <td className="p-4 sm:p-6"></td>
                    <td className="p-4 sm:p-8 text-center border-l border-slate-200">
                      <div className="flex flex-col space-y-4 items-center">
                        <Link to="/products" className="inline-flex items-center space-x-2 text-navy font-black hover:text-primary transition-colors text-base sm:text-lg">
                          <span>Know More</span>
                          <ArrowRight size={18} />
                        </Link>
                        <div className="w-full space-y-3">
                          <a href="/#contact" className="w-full py-3 sm:py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 text-xs sm:text-sm">
                            <Zap size={16} />
                            <span>Get Best Quote</span>
                          </a>
                          <a href="/#contact" className="w-full py-3 sm:py-4 bg-white border-2 border-navy/10 text-navy rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-navy hover:text-white transition-all text-xs sm:text-sm">
                            <Download size={16} />
                            <span>Brochure</span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 sm:p-8 text-center border-l border-slate-200">
                      <div className="flex flex-col space-y-4 items-center">
                        <Link to="/products" className="inline-flex items-center space-x-2 text-navy font-black hover:text-primary transition-colors text-base sm:text-lg">
                          <span>Know More</span>
                          <ArrowRight size={18} />
                        </Link>
                        <div className="w-full space-y-3">
                          <a href="/#contact" className="w-full py-3 sm:py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 text-xs sm:text-sm">
                            <Zap size={16} />
                            <span>Get Best Quote</span>
                          </a>
                          <a href="/#contact" className="w-full py-3 sm:py-4 bg-white border-2 border-navy/10 text-navy rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-navy hover:text-white transition-all text-xs sm:text-sm">
                            <Download size={16} />
                            <span>Brochure</span>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Features Below Product Table */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-navy">Why Choose <span className="text-primary">NXVOLTA</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Beyond hardware, we provide a complete energy ecosystem designed for longevity and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryFeatures.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl flex flex-col items-center text-center border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group hover:bg-white"
            >
              <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 group-hover:bg-primary transition-colors duration-300 border border-slate-100">
                {React.cloneElement(value.icon, { 
                  className: `${value.icon.props.className} group-hover:text-white transition-colors duration-300` 
                })}
              </div>
              <h3 className="text-xl font-black mb-3 text-navy">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
