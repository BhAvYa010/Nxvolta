import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Package, Zap } from 'lucide-react';

import commercialImg from '../assets/images/commercial-unit.jpg';
import industrialImg from '../assets/images/industrial-container.jpg';
import residentialImg from '../assets/images/residential-battery.jpg';

const ProductCatalog = () => {
  const products = [
    {
      title: "Commercial BESS",
      desc: "Compact and powerful storage for small to medium enterprises. Scalable from 50kWh to 500kWh.",
      features: ["Modular design", "Outdoor rated", "Smart cooling"],
      image: commercialImg,
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Industrial BESS",
      desc: "Containerized solutions for large-scale manufacturing and utility applications. MW-scale capacity.",
      features: ["Active balance BMS", "Fire suppression", "High voltage ready"],
      image: industrialImg,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Residential Storage",
      desc: "Sleek wall-mounted batteries for smart homes. Optimize solar usage and ensure backup.",
      features: ["Plug & Play", "Silent operation", "Mobile app sync"],
      image: residentialImg,
      color: "from-sky-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="products" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Product <span className="text-primary">Showcase</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Engineered for reliability. Built for the future. Discover our range of storage solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors group"
            >
              {/* Product Image */}
              <div className={`aspect-[4/3] relative overflow-hidden`}>
                 <div 
                   className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                   style={{ backgroundImage: `url(${product.image})` }}
                 ></div>
                 <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40 group-hover:opacity-20 transition-opacity`}></div>
                 <div className="absolute top-4 right-4 bg-dark/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
                   <Battery className="w-5 h-5 text-primary" />
                 </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{product.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn-secondary w-full py-2 flex items-center justify-center space-x-2">
                   <span>View Details</span>
                   <Package size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
