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
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy text-white text-lg">
                  <th className="p-8 font-bold w-1/3 border-b border-white/10">Features</th>
                  <th className="p-8 font-black text-center border-l border-white/10 w-1/3 text-primary text-2xl tracking-tighter">500 kW</th>
                  <th className="p-8 font-black text-center border-l border-white/10 w-1/3 text-primary text-2xl tracking-tighter">1 MW</th>
                </tr>
              </thead>
              <tbody className="text-navy divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-lg">Power</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">500 kW</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">1 MW</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-lg">Energy Capacity</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">~1 MWh</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">~2–4 MWh</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-lg">Efficiency</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">≥ 90%</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">≥ 90–95%</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-lg">Use Case</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">Commercial / Backup</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">Industrial / Utility</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-lg">Scalability</td>
                  <td className="p-6 text-center border-l border-slate-200 font-medium">Limited</td>
                  <td className="p-6 text-center border-l border-slate-200 font-black text-primary">High</td>
                </tr>
                
                {/* Actions Row */}
                <tr className="bg-slate-50/80">
                  <td className="p-6"></td>
                  <td className="p-8 text-center border-l border-slate-200 space-y-4">
                    <Link to="/products" className="inline-flex items-center space-x-2 text-navy font-black hover:text-primary transition-colors mb-6 text-lg">
                      <span>Know More</span>
                      <ArrowRight size={20} />
                    </Link>
                    <div className="space-y-3">
                      <a href="/#contact" className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                        <Zap size={18} />
                        <span>Get Best Quote</span>
                      </a>
                      <a href="/#contact" className="w-full py-4 bg-white border-2 border-navy/10 text-navy rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-navy hover:text-white transition-all">
                        <Download size={18} />
                        <span>Download Brochure</span>
                      </a>
                    </div>
                  </td>
                  <td className="p-8 text-center border-l border-slate-200 space-y-4">
                    <Link to="/products" className="inline-flex items-center space-x-2 text-navy font-black hover:text-primary transition-colors mb-6 text-lg">
                      <span>Know More</span>
                      <ArrowRight size={20} />
                    </Link>
                    <div className="space-y-3">
                      <a href="/#contact" className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                        <Zap size={18} />
                        <span>Get Best Quote</span>
                      </a>
                      <a href="/#contact" className="w-full py-4 bg-white border-2 border-navy/10 text-navy rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-navy hover:text-white transition-all">
                        <Download size={18} />
                        <span>Download Brochure</span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
              className="bg-slate-50 p-8 rounded-3xl flex flex-col items-center text-center border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {value.icon}
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
