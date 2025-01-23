import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='text-red-300'>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Work/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App
