import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CloudLightning, Cpu, BarChart3 } from 'lucide-react';
import renewableImg from '../assets/images/renewable-ecosystem.jpg';

const RenewableFocus = () => {
  const focuses = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-400" />,
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
      desc: "AI-driven algorithms to manage energy flow and maximize system lifespan."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Efficiency Tracking",
      desc: "Real-time monitoring and analytics to ensure peak performance 24/7."
    }
  ];

  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Contributing to the <span className="text-primary">Renewable Ecosystem</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              At nxvolta, we don't just store energy; we optimize the entire renewable lifecycle. By bridging the gap between generation and consumption, we enable a more resilient and sustainable power infrastructure.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {focuses.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square glass-card overflow-hidden group">
               <div 
                 className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
                 style={{ backgroundImage: `url(${renewableImg})` }}
               ></div>
               <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <p className="text-white font-bold text-2xl mb-2">Sustainable Energy Future</p>
                 <p className="text-slate-300 text-sm italic">"The future of energy is not just green, it's stored and smart."</p>
               </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenewableFocus;
