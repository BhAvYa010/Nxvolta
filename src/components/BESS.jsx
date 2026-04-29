import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, ShieldCheck, TrendingDown } from 'lucide-react';
import bessDiagram from '../assets/images/bess-diagram.jpg';

const BESS = () => {
  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6 text-primary" />,
      title: "Peak Shaving",
      desc: "Reduce electricity costs by discharging stored energy during high-demand periods."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      title: "Backup Power",
      desc: "Instantaneous power switchover during outages ensuring 100% uptime for operations."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Power Quality",
      desc: "Stabilize voltage and frequency fluctuations to protect sensitive equipment."
    },
    {
      icon: <Battery className="w-6 h-6 text-green-400" />,
      title: "Sustainability",
      desc: "Store excess renewable energy that would otherwise be curtailed or wasted."
    }
  ];

  return (
    <section id="bess" className="py-24 bg-dark-soft/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">What is <span className="text-primary">BESS</span>?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Battery Energy Storage Systems (BESS) are advanced technology solutions that capture energy from different sources and store it in rechargeable batteries for later use.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {benefits.slice(0, 2).map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start space-x-4"
              >
                <div className="bg-white/5 p-3 rounded-xl">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-2 aspect-square flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group overflow-hidden">
                  <img 
                    src={bessDiagram} 
                    alt="BESS Diagram" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
               </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {benefits.slice(2, 4).map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start space-x-4"
              >
                <div className="bg-white/5 p-3 rounded-xl">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BESS;
