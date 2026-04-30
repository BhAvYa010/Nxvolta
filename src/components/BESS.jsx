import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, ShieldCheck, TrendingDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Imagebess from '../assets/images/Imagebess.jpg';

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
      icon: <Battery className="w-6 h-6 text-green-500" />,
      title: "Sustainability",
      desc: "Store excess renewable energy that would otherwise be curtailed or wasted."
    }
  ];

  return (
    <section id="bess" className="py-24 bg-white relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">What is <span className="text-primary">BESS</span>?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
            Battery Energy Storage Systems (BESS) are advanced technology solutions that capture energy from different sources and store it in rechargeable batteries for later use.
          </p>
          <Link to="/blog" className="inline-flex items-center space-x-2 text-navy font-bold hover:text-primary transition-colors group">
            <span>Know More About BESS</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {benefits.slice(0, 2).map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start space-x-4 border border-slate-100"
              >
                <div className="bg-slate-50 p-3 rounded-xl shadow-sm">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-navy">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
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
            <div className="glass-card p-2 aspect-square flex items-center justify-center overflow-hidden bg-white shadow-2xl shadow-primary/5">
               <div className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={Imagebess} 
                    alt="BESS Technology" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
               </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
          </motion.div>

          <div className="space-y-8">
            {benefits.slice(2, 4).map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start space-x-4 border border-slate-100"
              >
                <div className="bg-slate-50 p-3 rounded-xl shadow-sm">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-navy">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
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
