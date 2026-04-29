import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Leaf, Zap, Award } from 'lucide-react';

const Target2030 = () => {
  const stats = [
    {
      icon: <Zap className="text-primary w-8 h-8" />,
      value: "500+ MW",
      label: "Energy Deployed"
    },
    {
      icon: <Globe className="text-secondary w-8 h-8" />,
      label: "Global Reach",
      value: "50+ Cities"
    },
    {
      icon: <Leaf className="text-green-500 w-8 h-8" />,
      label: "Carbon Reduction",
      value: "1M+ Tons"
    },
    {
      icon: <Award className="text-accent w-8 h-8" />,
      label: "Efficiency Rate",
      value: "98.5%"
    }
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="target-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#target-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Our Vision 2030: <br />
              <span className="text-dark">Powering a Zero-Carbon World</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              We are on a relentless mission to transform how the world stores and consumes energy. By 2030, we aim to be the backbone of sustainable energy infrastructure globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                <span className="font-bold">India</span> • <span className="text-white/70">Surat HQ</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                <span className="font-bold text-white">Innovation First</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl flex flex-col items-center text-center text-dark shadow-2xl"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target2030;
