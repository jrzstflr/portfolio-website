import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Work from "./components/Work"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="text-red-300">
      <Navbar />
      <Hero />
      <div id="about" data-aos="fade-up">
        <About />
      </div>
      <div id="services" data-aos="fade-up">
        <Services />
      </div>
      <div id="work" data-aos="fade-up">
        <Work />
      </div>
      <div id="testimonials" data-aos="fade-up">
        <Testimonial />
      </div>
      <div id="contact" data-aos="fade-up">
        <Contact />
      </div>
    </div>
  )
}

export default App

