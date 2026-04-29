import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import RenewableFocus from './components/RenewableFocus';
import BESS from './components/BESS';
import WhoCanUse from './components/WhoCanUse';
import WhatWeDeliver from './components/WhatWeDeliver';
import ProductCatalog from './components/ProductCatalog';
import Target2030 from './components/Target2030';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark text-slate-100 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <RenewableFocus />
        <BESS />
        <WhoCanUse />
        <WhatWeDeliver />
        <ProductCatalog />
        <Target2030 />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
