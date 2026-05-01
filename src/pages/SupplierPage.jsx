import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Settings, 
  Cpu, 
  Battery, 
  Container, 
  Zap, 
  Thermometer, 
  Link2, 
  FileText, 
  Building2, 
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Truck
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import ScrollToHash from '../components/ScrollToHash';

const SupplierPage = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const categories = [
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Battery Cells",
      desc: "LFP and NMC high-density storage cells."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "BMS Systems",
      desc: "Advanced battery management and monitoring."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "PCS / Inverters",
      desc: "Bi-directional power conversion systems."
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Thermal Mgmt",
      desc: "Active cooling and liquid immersion solutions."
    },
    {
      icon: <Container className="w-8 h-8" />,
      title: "Enclosures",
      desc: "Fire-rated containers and modular cabinets."
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: "Connectors & BOS",
      desc: "High-voltage cables and auxiliary components."
    }
  ];

  const steps = [
    { icon: <FileText />, title: "Submission Review", desc: "Initial validation of product specs and certifications." },
    { icon: <ClipboardCheck />, title: "Technical Eval", desc: "In-depth engineering review by our BESS experts." },
    { icon: <FlaskConical />, title: "Pilot Testing", desc: "Real-world performance testing in our lab environments." },
    { icon: <Truck />, title: "Vendor Listing", desc: "Onboarding into our procurement and supply chain." }
  ];

  const handleCategoryChange = (e) => {
    if (e.target.value === 'Other') {
      setShowOther(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_cf1az8j"; 
    const TEMPLATE_ID = "template_6p4mnha"; 
    const PUBLIC_KEY = "bC8VYNlR3dl-OGXkb";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
          setIsSuccess(true);
          setIsSubmitting(false);
      }, (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again or email us directly at partners@nxvolta.com");
          setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-white min-h-screen pt-24 font-sans">
      <ScrollToHash />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight"
          >
            Partner With Us to Power <br/>
            <span className="text-primary italic">the Future of Energy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
          >
            We collaborate with leading manufacturers and suppliers across the entire BESS value chain to deliver industrial-grade storage solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#onboarding-form" className="btn-primary px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm inline-flex items-center space-x-2">
              <span>Become a Supplier</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-navy mb-4 tracking-tighter uppercase">Categories We Source</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 font-medium">Seeking high-performance components that meet international safety and reliability standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: '#10b981' }}
                className="p-8 border border-slate-100 rounded-3xl bg-slate-50 transition-all duration-300 group"
              >
                <div className="text-navy bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-black text-navy mb-2 uppercase tracking-tight">{cat.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tighter uppercase leading-none">
                Why Partner With <span className="text-primary">NXVolta?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Long-term Procurement", desc: "Stable pipeline of large-scale deployments ensuring consistent demand." },
                  { title: "Engineering-Driven", desc: "Our evaluation is based on technical merit and innovation potential." },
                  { title: "Fast-Growing Scale", desc: "Rapidly expanding footprint in industrial and utility sectors." },
                  { title: "Transparent Process", desc: "Clear communication and fair vendor evaluation benchmarks." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-navy uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <ShieldCheck className="w-16 h-16 text-primary mb-8" />
              <h3 className="text-3xl font-black mb-6 tracking-tight">Our Quality Commitment</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
                "We don't just build batteries; we build energy resilience. Our partners are the backbone of this mission, and we prioritize those who share our commitment to safety and engineering excellence."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30"></div>
                <div>
                  <div className="font-black uppercase tracking-widest text-xs">Technical Directorate</div>
                  <div className="text-primary font-bold text-sm">NXVOLTA Energy Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Process */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-navy mb-4 tracking-tighter uppercase">Qualification Process</h2>
            <p className="text-slate-500 font-medium">A structured path to becoming an approved vendor.</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mx-auto mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-sm relative">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy text-white text-xs flex items-center justify-center font-black border-4 border-white">
                      0{i+1}
                    </div>
                    {React.cloneElement(step.icon, { className: "w-8 h-8" })}
                  </div>
                  <h4 className="text-lg font-black text-navy mb-2 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section id="onboarding-form" className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="glass-card p-8 md:p-16 border border-slate-200 shadow-2xl relative overflow-hidden">
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6 animate-bounce" />
                <h3 className="text-4xl font-black text-navy mb-4 tracking-tighter uppercase">Application Received</h3>
                <p className="text-slate-600 text-lg font-medium mb-8">
                  Our procurement team will review your submission and contact you for technical evaluation.
                </p>
                <button onClick={() => { setIsSuccess(false); setShowOther(false); }} className="btn-secondary px-8">Submit Another Product</button>
              </div>
            ) : (
              <>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-black text-navy mb-4 tracking-tighter uppercase">Supplier Submission</h2>
                  <p className="text-slate-500 font-medium">Please provide comprehensive technical details for evaluation.</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-navy uppercase tracking-widest">Company Name</label>
                      <input type="text" name="company_name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold" placeholder="e.g. NXVOLTA" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-navy uppercase tracking-widest">Website</label>
                      <input type="url" name="website" placeholder="https://nxvolta.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-navy uppercase tracking-widest">Your Name</label>
                      <input type="text" name="user_name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-navy uppercase tracking-widest">Work Email</label>
                      <input type="email" name="user_email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-black text-navy uppercase tracking-widest">Product Category</label>
                      {!showOther ? (
                        <select 
                          name="category" 
                          onChange={handleCategoryChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold appearance-none cursor-pointer"
                        >
                          <option value="">Select a category</option>
                          <option>Battery Cells</option>
                          <option>BMS / EMS</option>
                          <option>PCS / Inverters</option>
                          <option>Thermal Systems</option>
                          <option>Container / BOS</option>
                          <option value="Other">Other (Please specify)</option>
                        </select>
                      ) : (
                        <div className="relative">
                          <input 
                            type="text" 
                            name="category" 
                            required 
                            autoFocus
                            className="w-full bg-slate-50 border border-primary/50 border-2 rounded-xl px-4 py-4 text-navy focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold" 
                            placeholder="Type your product category..." 
                          />
                          <button 
                            type="button"
                            onClick={() => setShowOther(false)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy text-[10px] font-black uppercase tracking-widest"
                          >
                            Back to list
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy uppercase tracking-widest">Manufacturing Capacity (Annual)</label>
                    <input type="text" name="capacity" placeholder="e.g. 500MWh / Year" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-navy uppercase tracking-widest">Product Description</label>
                    <textarea name="description" rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold resize-none" placeholder="Details about your product engineering and specifications..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-xl shadow-primary/20 flex items-center justify-center space-x-3 transition-all active:scale-95"
                  >
                    <span>{isSubmitting ? 'Processing Application...' : 'Submit for Evaluation'}</span>
                    {!isSubmitting && <ArrowRight size={20} />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">Have a Custom Solution?</h2>
          <p className="text-slate-400 text-lg mb-10 font-medium">Talk directly to our engineering procurement team.</p>
          <a href="mailto:partners@nxvolta.com" className="btn-secondary px-12 py-5 rounded-full border-white/20 text-white hover:bg-white hover:text-navy transition-all font-black uppercase tracking-widest text-sm">
            Contact Engineering Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default SupplierPage;
