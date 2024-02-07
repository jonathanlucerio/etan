import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Products from './components/Products'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Products/>
    </div>
  );
}

export default App;
