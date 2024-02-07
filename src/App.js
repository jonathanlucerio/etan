import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Products from './components/Products'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
