import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Building2, Database, Car, UtilityPole } from 'lucide-react';

const WhoCanUse = () => {
  const sectors = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Industries",
      desc: "Manufacturing plants needing uninterrupted power and peak load management."
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Commercial Buildings",
      desc: "Offices and malls looking to reduce energy costs and enhance sustainability."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Centers",
      desc: "Mission-critical facilities requiring 100% reliability and backup power."
    },
    {
      icon: <UtilityPole className="w-10 h-10" />,
      title: "Grid",
      desc: "Power distributors seeking to stabilize voltage and frequency across the region."
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "EV Infrastructure",
      desc: "Fast-charging stations needing high-power bursts without straining the network."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Tailored for Every <span className="text-primary">Sector</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our versatile storage solutions are designed to meet the unique energy demands of various sectors, ensuring reliability and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(16, 185, 129, 0.5)' }}
              className="glass-card p-8 border border-slate-200 transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-dark">
                {sector.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">{sector.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{sector.desc}</p>
            </motion.div>
          ))}
          
          <div className="glass-card p-8 border-dashed border-2 border-slate-300 flex flex-col items-center justify-center text-center bg-transparent shadow-none hover:bg-slate-100 transition-colors">
            <p className="text-navy mb-4 font-bold text-lg">Your Sector Not Listed?</p>
            <a href="/#contact" className="text-primary hover:text-primary-dark font-bold flex items-center space-x-2 transition-colors">
              <span>Discuss Custom Solution</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanUse;
