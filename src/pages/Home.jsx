import React from 'react';
import ScrollToHash from '../components/ScrollToHash';
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
      <ScrollToHash />
      <Hero />
...
      <BESS />
      <WhoCanUse />
      <ProductCatalog />
      <VisionMission />
      <ContactForm />
    </>
  );
};

export default Home;
