import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Store from './Pages/Store';
import Contact from './Pages/Contact';

function RouterPages() {
  return (
    <Routes>
        <Route path='etan' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='store' element={<Store />}/>
        <Route path='contact' element={<Contact />}/>
    </Routes>
    
  )
}

export default RouterPages