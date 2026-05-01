import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Download, CheckCircle2, ShieldAlert, Thermometer, Cpu, Battery, Settings, Container } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';
import commercialImg from '../assets/images/commercial-unit.jpg';
import industrialImg from '../assets/images/industrial-container.jpg';

const ProductPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('brochure'); // 'brochure' or 'quote'
  const [activeProduct, setActiveProduct] = useState({ title: '', id: '' });

  const openModal = (title, id, mode) => {
    setActiveProduct({ title, id });
    setModalMode(mode);
    setModalOpen(true);
  };

  const products = [
    {
      id: '1mwh',
      title: '1 MWh System',
      subtitle: 'For Medium-Scale Industrial Solutions',
      energy: '1050 kWh',
      voltage: '480 V',
      duration: '2 Hours',
      weight: '~16,000 kg',
      config: '2P150S',
      modules: '16 Modules',
      strings: '8',
      cell: 'LFP (314 Ah)',
      certifications: 'UL9540, NFPA68, NFPA855, IEC 62933, UN3536 (Under Process)',
      bg: 'bg-white',
      textColor: 'text-navy',
      accentColor: 'text-primary',
      img: commercialImg,
      details: [
        { label: 'Configuration', value: '2P150S', icon: <Settings className="w-4 h-4" /> },
        { label: 'Nominal DC Voltage', value: '480 V', icon: <Zap className="w-4 h-4" /> },
        { label: 'Battery Modules', value: '16 Modules', icon: <Container className="w-4 h-4" /> },
        { label: 'Operating Voltage', value: '332.8 V', icon: <Zap className="w-4 h-4" /> },
        { label: 'Energy Capacity', value: '1050 kWh', icon: <Battery className="w-4 h-4" /> },
        { label: 'Cooling', value: 'Liquid Cooling', icon: <Thermometer className="w-4 h-4" /> }
      ]
    },
    {
      id: '5mwh',
      title: '5 MWh System',
      subtitle: 'For Utility-Scale Infrastructure',
      energy: '5015 kWh',
      voltage: '1331 V',
      duration: '3.5 Hours',
      weight: '~44,000 kg',
      config: '12P416S',
      modules: '48 Modules',
      strings: '12',
      cell: 'LFP (314 Ah)',
      certifications: 'UL9540, NFPA68, NFPA855, IEC 62933, UN3536 (Under Process)',
      bg: 'bg-navy',
      textColor: 'text-white',
      accentColor: 'text-primary',
      img: industrialImg,
      details: [
        { label: 'Configuration', value: '12P416S', icon: <Settings className="w-4 h-4" /> },
        { label: 'Nominal DC Voltage', value: '1331 V', icon: <Zap className="w-4 h-4" /> },
        { label: 'Battery Modules', value: '48 Modules', icon: <Container className="w-4 h-4" /> },
        { label: 'Operating Voltage', value: '332.8 V', icon: <Zap className="w-4 h-4" /> },
        { label: 'Energy Capacity', value: '5015 kWh', icon: <Battery className="w-4 h-4" /> },
        { label: 'Cooling', value: 'Liquid Cooling', icon: <Thermometer className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 font-sans text-navy">
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productTitle={activeProduct.title}
        productId={activeProduct.id}
        mode={modalMode}
      />

      {/* Section Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-8xl font-black text-navy mb-6 tracking-tighter uppercase"
            >
              System <span className="text-primary italic">Specifications</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-xl font-bold uppercase tracking-widest"
            >
              Industrial-Grade Battery Energy Storage Solutions
            </motion.p>
          </div>
        </div>
      </div>

      {/* Split Screen Sections */}
      <div className="flex flex-col lg:flex-row w-full overflow-hidden">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`w-full lg:w-1/2 ${product.bg} ${product.textColor} p-8 md:p-16 xl:p-24 relative overflow-hidden border-r border-slate-100 group`}
          >
            {/* Background Decoration */}
            <div className={`absolute top-0 right-0 w-96 h-96 ${index === 1 ? 'bg-primary/5' : 'bg-primary/5'} rounded-full blur-[120px] -mr-32 -mt-32`}></div>
            
            <div className="relative z-10">
              {/* Minimal Front Header */}
              <div className="mb-16">
                {index === 1 && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur-sm">
                    Utility Scale / High Capacity
                  </div>
                )}
                <h2 className={`text-6xl md:text-[9rem] font-black opacity-5 mb-[-2rem] md:mb-[-4rem] tracking-tighter select-none`}>
                  {product.id === '1mwh' ? '1.0' : '5.0'}
                </h2>
                <h3 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase leading-none">
                  {product.title}
                </h3>
                <p className={`${index === 1 ? 'text-slate-400' : 'text-slate-500'} font-black text-lg uppercase tracking-tight mb-4`}>
                  {product.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/20">Config: {product.config}</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/20">DC Voltage: {product.voltage}</span>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="mb-16">
                <h4 className={`text-sm font-black uppercase tracking-[0.3em] mb-8 ${index === 1 ? 'text-slate-500' : 'text-slate-400'}`}>Technical Data</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {product.details.map((detail, i) => (
                    <div key={i} className={`pb-4 border-b ${index === 1 ? 'border-white/5' : 'border-slate-100'} flex justify-between items-end`}>
                      <div className="flex items-center space-x-2">
                        <span className="text-primary">{detail.icon}</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${index === 1 ? 'text-slate-500' : 'text-slate-400'}`}>{detail.label}</span>
                      </div>
                      <span className="text-sm font-bold tracking-tight">{detail.value}</span>
                    </div>
                  ))}
                  <div className={`pb-4 border-b ${index === 1 ? 'border-white/5' : 'border-slate-100'} flex justify-between items-end`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary"><Cpu className="w-4 h-4" /></span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${index === 1 ? 'text-slate-500' : 'text-slate-400'}`}>Cycle Life</span>
                    </div>
                    <span className="text-sm font-bold tracking-tight">&gt; 10,000</span>
                  </div>
                  <div className={`pb-4 border-b ${index === 1 ? 'border-white/5' : 'border-slate-100'} flex justify-between items-end`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary"><CheckCircle2 className="w-4 h-4" /></span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${index === 1 ? 'text-slate-500' : 'text-slate-400'}`}>Duration</span>
                    </div>
                    <span className="text-sm font-bold tracking-tight">{product.duration}</span>
                  </div>
                </div>
              </div>

              {/* Performance Section */}
              <div className="mb-16">
                 <div className={`${index === 1 ? 'bg-white/5' : 'bg-slate-50'} p-6 rounded-2xl border ${index === 1 ? 'border-white/10' : 'border-slate-100'}`}>
                    <div className="flex items-center space-x-2 mb-4">
                       <ShieldAlert className="text-primary w-5 h-5" />
                       <span className="font-black uppercase tracking-[0.2em] text-xs">Global Certifications</span>
                    </div>
                    <p className={`text-xs font-medium leading-relaxed ${index === 1 ? 'text-slate-400' : 'text-slate-500'}`}>
                       {product.certifications}
                    </p>
                 </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => openModal(product.title, product.id, 'quote')}
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary text-white rounded-xl font-black hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 uppercase tracking-widest text-xs"
                >
                  <Zap size={18} />
                  <span>Request Quote</span>
                </button>
                <button 
                  onClick={() => openModal(product.title, product.id, 'brochure')}
                  className={`inline-flex items-center justify-center space-x-3 px-8 py-4 ${index === 1 ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-navy' : 'bg-white border-navy/10 text-navy hover:bg-navy hover:text-white'} border-2 rounded-xl font-black transition-all duration-300 uppercase tracking-widest text-xs`}
                >
                  <Download size={18} />
                  <span>Technical Brochure</span>
                </button>
              </div>
            </div>

            {/* Visual Image */}
            <div className={`absolute bottom-6 right-6 md:bottom-12 md:right-12 w-64 h-64 md:w-80 md:h-80 opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-1000 group-hover:scale-110 pointer-events-none`}>
               <img src={product.img} alt={product.title} className="w-full h-full object-contain" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
