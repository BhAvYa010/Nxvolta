import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CloudLightning, Cpu, BarChart3 } from 'lucide-react';

const RenewableFocus = () => {
  const focuses = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Solar Integration",
      desc: "Seamlessly integrate solar PV systems with storage to capture every drop of sunshine."
    },
    {
      icon: <CloudLightning className="w-8 h-8 text-primary" />,
      title: "Storage Ecosystem",
      desc: "Advanced lithium-ion and flow battery technologies for high-density energy storage."
    },
    {
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      title: "Smart Optimization",
      desc: "Software-driven energy management to optimize performance and extend system lifespan."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Efficiency Tracking",
      desc: "Real-time monitoring and analytics to ensure peak performance 24/7."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 text-navy">Powering a Resilient <span className="text-primary">Ecosystem</span></h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            At NXVOLTA, we provide advanced battery energy storage systems that store energy and ensure it is available whenever and wherever it’s needed. By bridging the gap between generation and consumption, we enable a more resilient and sustainable power infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focuses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl mb-3 text-navy">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenewableFocus;
