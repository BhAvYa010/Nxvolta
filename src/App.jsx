import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ProductPage from './pages/ProductPage';
import SupplierPage from './pages/SupplierPage';

function App() {
  return (
    <Router>
      <div className="bg-white text-navy font-sans selection:bg-primary selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/Procurement" element={<SupplierPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
