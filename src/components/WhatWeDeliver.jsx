import React from 'react';
import { motion } from 'framer-motion';
import { MonitorCheck, Zap, Settings, Truck } from 'lucide-react';

const WhatWeDeliver = () => {
  const values = [
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
      icon: <Truck className="w-8 h-8 text-green-400" />,
      title: "End-to-End Service",
      desc: "From initial site assessment and design to installation, testing, and lifetime maintenance."
    }
  ];

  return (
    <section className="py-24 bg-dark-soft/50 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">What We <span className="text-primary">Deliver</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Beyond the hardware, we provide a complete energy ecosystem designed for longevity, performance, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex items-center space-x-6 hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="flex-shrink-0 bg-dark-soft p-4 rounded-2xl shadow-inner shadow-white/5 border border-white/5">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
};

export default WhatWeDeliver;
