import React, { useState } from "react"
import TestimonialImg1 from "../assets/profilemen.jpeg"
import TestimonialImg2 from "../assets/profilewomen.jpg"
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa"
import google from "../assets/google logo.png"
import slack from "../assets/slack logo.png"
import dropbox from "../assets/dropbox logo.png"
import tesla from "../assets/tesla logo.png"

const testimonial = [
  {
    name: "John",
    position: "CEO of Google",
    image: TestimonialImg1,
    feedback:
      "The attention to detail and creativity in their designs are unparalleled. They seamlessly capture the essence of a brand while delivering functionality and aesthetics that exceed expectations. Truly a game-changer for our digital presence.",
  },
  {
    name: "Dina",
    position: "CEO of Amazon",
    image: TestimonialImg2,
    feedback:
      "Their innovative approach to design and branding sets a new standard in the industry. The team's dedication to excellence and user experience has been instrumental in creating platforms that resonate with our audience globally.",
  },
]

const Testimonial = () => {
  const [current, setCurrent] = useState(0)

  const testimonialCount = testimonial.length

  const nextTestimonial = () => {
    setCurrent(current === testimonialCount - 1 ? 0 : current + 1)
  }

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonialCount - 1 : current - 1)
  }

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-yellow-500 font-semibold text-lg uppercase mb-2">Testimonials</h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
        </div>
      </div>

      <div
        className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex justify-center items-center mb-4">
          <img
            src={testimonial[current].image || "/placeholder.svg"}
            className="w-32 h-32 rounded-full border-4 border-yellow-500 object-cover"
          />
        </div>
        <p className="text-gray-600 italic mb-6 px-14">{testimonial[current].feedback}</p>
        <h3 className="font-semibold text-lg text-center">{testimonial[current].name}</h3>
        <p className="text-gray-500 text-center">{testimonial[current].position}</p>
        <div className="absolute inset-x-0 top-1/2 transform-translate-y-1/2 flex justify-between px-4">
          <button
            className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-300"
            onClick={prevTestimonial}
          >
            <FaArrowLeft />
          </button>
          <button
            className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-300"
            onClick={nextTestimonial}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
        <h4 className="text-xl font-semibold mb-14 text-center text-black">Who Makes Me Proud?</h4>
        <div className="flex justify-center gap-4 md:gap-16  lg:gap-32 items-center flex-wrap">
          <img src={slack || "/placeholder.svg"} alt="slack" className="h-6 ad:h-7 object-cover" />
          <img src={google || "/placeholder.svg"} alt="google" className="h-6 ad:h-7 object-cover" />
          <img src={dropbox || "/placeholder.svg"} alt="dropbox" className="h-6 ad:h-7 object-cover" />
          <img src={tesla || "/placeholder.svg"} alt="tesla" className="h-8 ad:h-8 object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial

