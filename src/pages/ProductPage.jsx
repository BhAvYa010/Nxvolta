import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, Download, CheckCircle2, 
  RotateCcw, Info, Settings, Battery, 
  Thermometer, Container, Scale, Mountain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';
import commercialImg from '../assets/images/commercial-unit.jpg';
import industrialImg from '../assets/images/industrial-container.jpg';

const ProductPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('brochure');
  const [activeProduct, setActiveProduct] = useState({ title: '', id: '' });
  
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);

  const openModal = (e, title, id, mode) => {
    e.stopPropagation();
    setActiveProduct({ title, id });
    setModalMode(mode);
    setModalOpen(true);
  };

  const products = [
    {
      id: '1mwh',
      title: '1 MWh System',
      subtitle: 'Commercial & Industrial Solution',
      shortSpecs: { config: '2P150S', voltage: '480 V' },
      isFlipped: isFlipped1,
      setFlipped: setIsFlipped1,
      img: commercialImg,
      bg: 'bg-white',
      textColor: 'text-navy',
      accent: 'text-primary',
      fullSpecs: {
        overview: 'Designed for medium-scale commercial and industrial applications, offering reliable energy management, peak shaving, and backup support with a compact and efficient architecture.',
        specs: [
          { label: 'Configuration', value: '2P150S', icon: <Settings size={14}/> },
          { label: 'Nominal DC Voltage', value: '480 V', icon: <Zap size={14}/> },
          { label: 'Battery Modules', value: '16 Modules', icon: <Container size={14}/> },
          { label: 'Number of Strings', value: '8', icon: <Settings size={14}/> },
          { label: 'Nominal Energy', value: '1050 kWh', icon: <Battery size={14}/> },
          { label: 'Cell Type', value: 'LFP (314 Ah)', icon: <Cpu size={14}/> }
        ],
        performance: [
          { label: 'Cycle Life', value: '> 10,000', icon: <RotateCcw size={14}/> },
          { label: 'Cooling', value: 'Liquid Cooling', icon: <Thermometer size={14}/> },
          { label: 'Op. Voltage', value: '332.8 V', icon: <Zap size={14}/> },
          { label: 'Duration', value: '2 Hours', icon: <CheckCircle2 size={14}/> }
        ],
        physical: [
          { label: 'Weight', value: '~16,000 kg', icon: <Scale size={14}/> },
          { label: 'Altitude', value: '< 2800 m', icon: <Mountain size={14}/> }
        ]
      }
    },
    {
      id: '5mwh',
      title: '5 MWh System',
      subtitle: 'Utility-Scale Infrastructure',
      shortSpecs: { config: '12P416S', voltage: '1331 V' },
      isFlipped: isFlipped5,
      setFlipped: setIsFlipped5,
      img: industrialImg,
      bg: 'bg-navy',
      textColor: 'text-white',
      accent: 'text-primary',
      fullSpecs: {
        overview: 'Engineered for utility-scale and large industrial deployments, delivering high-capacity energy storage with enhanced scalability, efficiency, and long-duration performance.',
        specs: [
          { label: 'Configuration', value: '12P416S', icon: <Settings size={14}/> },
          { label: 'Nominal DC Voltage', value: '1331 V', icon: <Zap size={14}/> },
          { label: 'Battery Modules', value: '48 Modules', icon: <Container size={14}/> },
          { label: 'Number of Strings', value: '12', icon: <Settings size={14}/> },
          { label: 'Nominal Energy', value: '5015 kWh', icon: <Battery size={14}/> },
          { label: 'Cell Type', value: 'LFP (314 Ah)', icon: <Cpu size={14}/> }
        ],
        performance: [
          { label: 'Cycle Life', value: '> 10,000', icon: <RotateCcw size={14}/> },
          { label: 'Cooling', value: 'Liquid Cooling', icon: <Thermometer size={14}/> },
          { label: 'Op. Voltage', value: '332.8 V', icon: <Zap size={14}/> },
          { label: 'Duration', value: '3.5 Hours', icon: <CheckCircle2 size={14}/> }
        ],
        physical: [
          { label: 'Weight', value: '~44,000 kg', icon: <Scale size={14}/> },
          { label: 'Altitude', value: '< 2800 m', icon: <Mountain size={14}/> }
        ]
      }
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 font-sans text-navy overflow-x-hidden">
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productTitle={activeProduct.title}
        productId={activeProduct.id}
        mode={modalMode}
      />

      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-7xl font-black text-navy mb-4 tracking-tighter uppercase"
            >
              Products
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Interactive Split Screen */}
      <div className="flex flex-col lg:flex-row min-h-[900px]">
        {products.map((p, idx) => (
          <div 
            key={p.id} 
            className={`w-full lg:w-1/2 perspective-1000 relative group cursor-pointer`}
            onClick={() => p.setFlipped(!p.isFlipped)}
          >
            <motion.div
              initial={false}
              animate={{ rotateY: p.isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full h-full min-h-[850px] lg:min-h-full"
            >
              {/* FRONT SIDE */}
              <div 
                className={`absolute inset-0 backface-hidden ${p.bg} ${p.textColor} p-8 md:p-20 flex flex-col justify-center border-r border-slate-100`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="relative z-10">
                  <div className="mb-12">
                    <h2 className={`text-7xl md:text-[12rem] font-black ${idx === 1 ? 'text-white/10' : 'text-navy/5'} mb-[-2rem] md:mb-[-5rem] tracking-tighter select-none`}>
                      {p.id === '1mwh' ? '1.0' : '5.0'}
                    </h2>
                    <h3 className={`text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase leading-[0.8] ${idx === 1 ? 'text-white' : 'text-navy'}`}>
                      {p.title}
                    </h3>
                    <p className={`text-xl md:text-2xl font-black uppercase tracking-tight ${idx === 1 ? 'text-slate-400' : 'text-slate-500'} mb-12`}>
                      {p.subtitle}
                    </p>
                    
                    <div className="space-y-6 max-w-sm">
                      <div className="flex items-center justify-between pb-4 border-b border-current/10">
                        <span className="text-xs font-black uppercase tracking-widest opacity-50">Configuration</span>
                        <span className="font-bold">{p.shortSpecs.config}</span>
                      </div>
                      <div className="flex items-center justify-between pb-4 border-b border-current/10">
                        <span className="text-xs font-black uppercase tracking-widest opacity-50">Nominal Voltage</span>
                        <span className="font-bold">{p.shortSpecs.voltage}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-12">
                    <button 
                      onClick={(e) => openModal(e, p.title, p.id, 'quote')}
                      className="bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all"
                    >
                      Request Quote
                    </button>
                    <button 
                      onClick={(e) => openModal(e, p.title, p.id, 'brochure')}
                      className={`px-8 py-4 border-2 ${idx === 1 ? 'border-white text-white hover:bg-white hover:text-navy' : 'border-navy text-navy hover:bg-navy hover:text-white'} rounded-xl font-black uppercase tracking-widest text-xs transition-all`}
                    >
                      Brochure
                    </button>
                  </div>

                  <div className="flex items-center space-x-3 text-primary font-black uppercase tracking-[0.2em] text-xs animate-pulse">
                    <Info size={16} />
                    <span>Click card for full specs</span>
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 w-64 h-64 md:w-96 md:h-96 opacity-10 pointer-events-none grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-1000">
                  <img src={p.img} alt={p.title} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* BACK SIDE (Detailed Specs) */}
              <div 
                className={`absolute inset-0 backface-hidden ${p.bg} ${p.textColor} p-8 md:p-12 overflow-y-auto border-r border-slate-100`}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="max-w-xl mx-auto h-full flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-primary">Technical Architecture</h3>
                    <div className="p-3 bg-primary/10 text-primary rounded-full" onClick={(e) => { e.stopPropagation(); p.setFlipped(false); }}>
                      <RotateCcw size={20} />
                    </div>
                  </div>

                  <p className={`text-sm font-medium mb-10 leading-relaxed ${idx === 1 ? 'text-slate-400' : 'text-slate-600'}`}>
                    {p.fullSpecs.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                    {/* Column 1: Core Specs */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4">Core Specifications</h4>
                      {p.fullSpecs.specs.map((s, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-current/10 pb-2">
                           <div className="flex items-center space-x-2 text-primary opacity-80">
                             {s.icon}
                             <span className="text-[9px] font-black uppercase tracking-wider">{s.label}</span>
                           </div>
                           <span className="text-xs font-bold">{s.value}</span>
                        </div>
                      ))}
                    </div>
                    {/* Column 2: Performance */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4">Performance Data</h4>
                      {p.fullSpecs.performance.map((s, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-current/10 pb-2">
                           <div className="flex items-center space-x-2 text-primary opacity-80">
                             {s.icon}
                             <span className="text-[9px] font-black uppercase tracking-wider">{s.label}</span>
                           </div>
                           <span className="text-xs font-bold">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-current/10 flex justify-between items-center">
                    <div className="flex space-x-8">
                      {p.fullSpecs.physical.map((s, i) => (
                        <div key={i}>
                          <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">{s.label}</div>
                          <div className="text-sm font-black">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1500px; }
        .backface-hidden { backface-visibility: hidden; }
      `}} />
    </div>
  );
};

const Cpu = ({ size, className }) => <motion.svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></motion.svg>

export default ProductPage;
