import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DevicePreview from './components/DevicePreview'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DevicePreview />
        <Benefits />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
