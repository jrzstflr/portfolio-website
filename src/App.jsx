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
      disable: "mobile", // Disable animations on mobile by default
    })

    // Custom initialization for different screen sizes
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile
        AOS.init({
          disable: false,
          duration: 600,
          offset: 50,
        })
      } else if (window.innerWidth < 1024) {
        // Tablet
        AOS.init({
          disable: false,
          duration: 800,
          offset: 100,
        })
      } else {
        // Desktop
        AOS.init({
          disable: false,
          duration: 1000,
          offset: 200,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial call

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="text-red-300">
      <Navbar />
      <Hero />
      <div
        id="about"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
      >
        <About />
      </div>
      <div
        id="services"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
      >
        <Services />
      </div>
      <div
        id="work"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-anchor-placement="top-bottom"
      >
        <Work />
      </div>
      <div
        id="testimonials"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        data-aos-anchor-placement="top-bottom"
      >
        <Testimonial />
      </div>
      <div
        id="contact"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-anchor-placement="top-bottom"
      >
        <Contact />
      </div>
    </div>
  )
}

export default App

