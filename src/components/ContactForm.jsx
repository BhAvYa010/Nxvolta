import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    const SERVICE_ID = "service_cf1az8j"; 
    const TEMPLATE_ID = "template_77uyrdw"; 
    const PUBLIC_KEY = "bC8VYNlR3dl-OGXkb";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setIsSuccess(true);
          setIsSubmitting(false);
      }, (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again or email us directly at nxvolta.energy@gmail.com");
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-navy">Let's Discuss Your <span className="text-primary">Energy Future</span></h2>
            <p className="text-slate-600 mb-10 text-lg font-medium">
              Have a project in mind? Our team of experts is ready to help you design and deploy the perfect storage solution.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Our Office</h4>
                  <p className="text-slate-600 font-medium">Adajan, Surat, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Email Us</h4>
                  <a href="mailto:nxvolta.energy@gmail.com" className="text-slate-600 hover:text-primary transition-colors font-medium">nxvolta.energy@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Working Hours</h4>
                  <p className="text-slate-600 font-medium">Monday — Saturday: 9 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-bounce">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-4xl font-black text-navy tracking-tighter">Enquiry Sent!</h3>
                <p className="text-slate-600 text-lg font-medium">
                  Thank you for reaching out. <br/>
                  We have received your message and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs sm:text-sm font-black text-navy uppercase tracking-[0.15em]">Your Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 sm:py-5 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder-slate-400 font-bold text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs sm:text-sm font-black text-navy uppercase tracking-[0.15em]">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 sm:py-5 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder-slate-400 font-bold text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs sm:text-sm font-black text-navy uppercase tracking-[0.15em]">Phone Number</label>
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 sm:py-5 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder-slate-400 font-bold text-base"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs sm:text-sm font-black text-navy uppercase tracking-[0.15em]">Project Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 sm:py-5 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder-slate-400 font-bold text-base"
                    placeholder="Tell us about your energy requirements..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center space-x-3 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-black transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  <span className="uppercase tracking-widest">{isSubmitting ? 'Sending...' : 'Send Enquiry Now'}</span>
                  {!isSubmitting && <Send size={24} />}
                </button>
                
                <p className="text-center text-xs text-slate-500 font-medium">
                  Securely processed by NXVOLTA Energy Systems.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
