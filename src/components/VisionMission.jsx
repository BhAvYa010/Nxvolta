import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="about" className="py-24 bg-dark-soft/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Foundation</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-l-4 border-l-primary hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To make clean energy reliable, affordable, and available 24/7 through advanced storage technologies. We envision a world powered by sustainable sources, where grid independence is a reality for everyone.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 border-l-4 border-l-secondary hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To build and deploy advanced battery storage solutions that enhance energy reliability, unlock renewable potential, and deliver cost-efficient energy at scale. We are committed to innovation, efficiency, and sustainability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
