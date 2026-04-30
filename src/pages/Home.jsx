import React from 'react';
import Hero from '../components/Hero';
import RenewableFocus from '../components/RenewableFocus';
import BESS from '../components/BESS';
import WhoCanUse from '../components/WhoCanUse';
import ProductCatalog from '../components/ProductCatalog';
import VisionMission from '../components/VisionMission';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <RenewableFocus />
      <BESS />
      <WhoCanUse />
      <ProductCatalog />
      <VisionMission />
      <ContactForm />
    </>
  );
};

export default Home;
