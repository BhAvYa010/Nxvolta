import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Download, CheckCircle2, Loader2, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose, productTitle, productId, mode = 'brochure' }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const triggerDownload = () => {
    const driveFileId = "1SuGMrsWNTGmzA3jkeu_t4LVNWzwoACvj";
    const downloadUrl = `https://drive.google.com/uc?id=${driveFileId}&export=download`;
    window.open(downloadUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_cf1az8j"; 
    const TEMPLATE_ID = "template_77uyrdw"; 
    const PUBLIC_KEY = "bC8VYNlR3dl-OGXkb";

    const formData = new FormData(formRef.current);
    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: mode === 'quote' 
        ? `Quote Request for ${productTitle}: ${formData.get('user_message')}`
        : `Brochure Request for ${productTitle}`,
      intent: mode === 'quote' ? 'quote_request_popup' : 'brochure_popup',
      product_interest: productId
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
          setIsSuccess(true);
          setIsSubmitting(false);
          if (mode === 'brochure') {
            triggerDownload();
          }
          // Auto close after 3 seconds on success
          setTimeout(() => {
            handleClose();
          }, 3000);
      }, (error) => {
          console.error("EmailJS Error:", error);
          alert("Submission failed. Please try again or email nxvolta.energy@gmail.com");
          setIsSubmitting(false);
      });
  };

  const handleClose = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    onClose();
  };

  const isQuote = mode === 'quote';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-navy/90 backdrop-blur-md"
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Header */}
            <div className="bg-navy p-8 md:p-10 text-white relative">
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-3 mb-4">
                {isQuote ? <Zap className="text-primary w-6 h-6" /> : <Download className="text-primary w-6 h-6" />}
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  {isQuote ? 'Procurement Request' : 'Technical Assets'}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9]">
                {isQuote ? 'Request a' : 'Download'} <br/>
                <span className="text-primary">{isQuote ? 'Quote' : 'Brochure'}</span>
              </h3>
              <p className="mt-4 text-slate-400 font-bold text-xs uppercase tracking-widest">{productTitle} System</p>
            </div>

            <div className="p-8 md:p-10">
              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-inner">
                    <CheckCircle2 size={48} className="animate-bounce" />
                  </div>
                  <h4 className="text-3xl font-black text-navy uppercase tracking-tight mb-2">Submitted!</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {isQuote 
                      ? 'Our team will prepare your custom quote and reach out within 24 hours.' 
                      : 'Your download has started. Thank you for your interest!'}
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="user_name" 
                      required 
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-base shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-1">Work Email</label>
                    <input 
                      type="email" 
                      name="user_email" 
                      required 
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-base shadow-sm"
                    />
                  </div>

                  {isQuote && (
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-1">Project Details</label>
                      <textarea 
                        name="user_message" 
                        required 
                        rows="3"
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-base shadow-sm resize-none"
                      />
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center space-x-3 shadow-xl shadow-primary/20 active:scale-95 transition-all mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>{isQuote ? 'Request Official Quote' : 'Secure Download'}</span>
                        {isQuote ? <Send size={18} /> : <Download size={18} />}
                      </>
                    )}
                  </button>
                  <p className="text-center text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">
                    Industrial-Grade Energy Systems • NXVOLTA
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
