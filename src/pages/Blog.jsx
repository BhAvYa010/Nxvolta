import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Imagebess from '../assets/images/Imagebess.jpg';

const Blog = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-slate-500 hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl lg:text-7xl font-black text-navy leading-tight tracking-tighter">
            Everything You Need to Know About <span className="text-primary">BESS</span>
          </h1>
          
          <div className="flex items-center space-x-6 text-slate-500 font-bold uppercase tracking-widest text-xs border-b border-slate-100 pb-10">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Engineering</span>
            <span>May 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 my-12 border border-slate-100">
            <img src={Imagebess} alt="BESS Technology" className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-xl prose-slate max-w-none">
            <h2 className="text-3xl font-black text-navy mt-16 mb-6">The Heart of Modern Energy</h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-xl font-medium">
              A Battery Energy Storage System (BESS) is much more than just a giant battery. It's a sophisticated energy management hub that captures power from any source—be it the grid, solar farms, or wind turbines—and intelligently stores it in high-density rechargeable modules for strategic deployment.
            </p>

            <div className="grid md:grid-cols-2 gap-10 my-16">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold text-navy mb-4">How It Works</h3>
                <p className="text-slate-600 leading-relaxed">
                  BESS units utilize advanced lithium-ion or flow battery technology coupled with bi-directional inverters. The system charges when energy is abundant and discharges during peak demand, stabilizing the entire ecosystem.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h3 className="text-2xl font-bold text-navy mb-4">Why It Matters</h3>
                <p className="text-slate-600 leading-relaxed">
                  As we transition to renewables, BESS solves the "intermittency problem"—ensuring the lights stay on even when the sun isn't shining or the wind isn't blowing.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-navy mt-16 mb-6">Where BESS is Used</h2>
            <ul className="grid md:grid-cols-2 gap-6 mb-12 list-none p-0">
              <li className="flex items-start space-x-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-navy text-white p-2 rounded-lg font-bold">01</div>
                <div>
                  <h4 className="font-bold text-navy text-lg">Commercial Peak Shaving</h4>
                  <p className="text-slate-500 text-sm">Reducing high electricity tariffs during peak hours.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-navy text-white p-2 rounded-lg font-bold">02</div>
                <div>
                  <h4 className="font-bold text-navy text-lg">Industrial Reliability</h4>
                  <p className="text-slate-500 text-sm">Providing seamless backup for mission-critical machinery.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-navy text-white p-2 rounded-lg font-bold">03</div>
                <div>
                  <h4 className="font-bold text-navy text-lg">Grid Frequency Regulation</h4>
                  <p className="text-slate-500 text-sm">Stabilizing the network for utility distributors.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-navy text-white p-2 rounded-lg font-bold">04</div>
                <div>
                  <h4 className="font-bold text-navy text-lg">EV Charging Support</h4>
                  <p className="text-slate-500 text-sm">Managing high-power surges during rapid charging.</p>
                </div>
              </li>
            </ul>

            <div className="bg-navy p-12 rounded-3xl border border-slate-100 mt-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/20 transition-colors duration-500"></div>
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Take Control of Your Energy Future</h3>
              <p className="text-slate-300 mb-8 text-lg relative z-10">Our engineers are ready to design a custom deployment for your facility.</p>
              <Link to="/#contact" className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-all inline-block relative z-10 shadow-xl shadow-primary/20">
                Contact Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
