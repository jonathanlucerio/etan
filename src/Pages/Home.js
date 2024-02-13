import React from 'react'
import Hero from '../components/Hero'
import Analytics from '../components/Analytics'
import Products from '../components/Products'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Hero />
        <Analytics />
        <Products />
        <Footer />
    </div>
  )
}

export default Home