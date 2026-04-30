import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const location = useLocation();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [intent, setIntent] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Detect intent and product from URL parameters
    const params = new URLSearchParams(location.search);
    const intentParam = params.get('intent');
    const productParam = params.get('product');
    
    setIntent(intentParam);
    setProduct(productParam);
  }, [location]);

  const triggerDownload = () => {
    // Simulate a brochure download
    // In a real scenario, this would be a link to your hosted PDF file
    const brochureName = product === '1mw' ? 'NXVOLTA_1MW_BESS_Brochure.txt' : 'NXVOLTA_500kW_BESS_Brochure.txt';
    const element = document.createElement("a");
    const file = new Blob([`Thank you for your interest in NXVOLTA ${product === '1mw' ? '1 MW' : '500 kW'} System.\n\nThis is a placeholder for your actual professional PDF brochure.\n\nContact: nxvolta.energy@gmail.com`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = brochureName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    const SERVICE_ID = "service_cf1az8j"; 
    const TEMPLATE_ID = "template_77uyrdw"; 
    const PUBLIC_KEY = "bC8VYNlR3dl-OGXkb";

    // Add hidden intent/product info to the form data if needed for EmailJS
    // This assumes your EmailJS template can handle these extra fields
    const templateParams = {
      ...Object.fromEntries(new FormData(formRef.current)),
      intent: intent || 'general_enquiry',
      product_interest: product || 'not_specified'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          setIsSuccess(true);
          setIsSubmitting(false);
          if (intent === 'brochure') {
            triggerDownload();
          }
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
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-navy">
              {intent === 'brochure' ? 'Get Your ' : 'Let\'s Discuss Your '} 
              <span className="text-primary">{intent === 'brochure' ? 'Brochure' : 'Energy Future'}</span>
            </h2>
            <p className="text-slate-600 mb-10 text-lg font-medium leading-relaxed">
              {intent === 'brochure' 
                ? `Please provide your details below to receive the technical brochure for our ${product === '1mw' ? '1 MW' : '500 kW'} system.` 
                : 'Have a project in mind? Our team of experts is ready to help you design and deploy the perfect storage solution.'}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1 uppercase tracking-tight">Our Office</h4>
                  <p className="text-slate-600 font-medium">Adajan, Surat, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1 uppercase tracking-tight">Email Us</h4>
                  <a href="mailto:nxvolta.energy@gmail.com" className="text-slate-600 hover:text-primary transition-colors font-medium">nxvolta.energy@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1 uppercase tracking-tight">Working Hours</h4>
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
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-bounce shadow-inner">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-4xl font-black text-navy tracking-tighter uppercase">Success!</h3>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  {intent === 'brochure' 
                    ? 'Your download has started. Please check your browser downloads.' 
                    : 'We have received your enquiry and will get back to you within 24 hours.'}
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary font-bold hover:underline uppercase tracking-widest text-sm"
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
                  <label className="text-xs sm:text-sm font-black text-navy uppercase tracking-[0.15em]">Message / Area of Interest</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 sm:py-5 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder-slate-400 font-bold text-base"
                    placeholder={intent === 'brochure' ? `I am interested in the ${product} BESS system for...` : "Tell us about your energy requirements..."}
                    defaultValue={intent === 'brochure' ? `Requesting brochure for ${product} BESS System.` : ""}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center space-x-3 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-black transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  <span className="uppercase tracking-widest">
                    {isSubmitting ? 'Processing...' : intent === 'brochure' ? 'Download Brochure' : 'Send Enquiry Now'}
                  </span>
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
