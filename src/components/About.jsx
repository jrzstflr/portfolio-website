import React from "react"
import aboutImg from "../assets/aboutImg.png"
import CV from "../assets/cv.pdf"
import { FaRegHandshake, FaRegFolderOpen } from "react-icons/fa"
import { MdSupportAgent } from "react-icons/md"
import { BsDownload } from "react-icons/bs"

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between">
        <div
          className="w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={aboutImg || "/placeholder.svg"} alt="About Me" className="w-full h-auto object-cover" />
        </div>
        <div
          className="w-full md:w-1/2 md:pl-12"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <h3 className="text-yellow-500 font-semibold text-lg uppercase mb-4">A Bit</h3>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-gray-600 mb-6">
            a dedicated and compassionate individual pursuing a career as a Junior Programmer. Currently enrolled in the
            Associate in Computer Technology program at Clark College of Science and Technology, I am focused on honing
            my technical expertise and problem-solving skills. With a strong foundation in logical thinking and coding,
            I enjoy building simple programs and tackling algorithmic challenges. My commitment to learning and
            improving drives me to seek opportunities where I can contribute meaningfully and grow professionally.
            Beyond my technical pursuits, I bring a meticulous approach, exceptional typing skills, and an eagerness to
            learn, making me a reliable and adaptable team player.
          </p>

          <div className="flex flex-wrap mb-6">
            <div className="flex items-center w-1/2 mb-4" data-aos="fade-up" data-aos-delay="100">
              <FaRegHandshake className="text-yellow-500 text-5xl mr-4" />
              <div>
                <h4 className="text-gray-700 font-semibold">5 Years+</h4>
                <p className="text-gray-700">Experience</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="flex items-center w-1/2 mb-4" data-aos="fade-up" data-aos-delay="200">
              <MdSupportAgent className="text-yellow-500 text-5xl mr-4" />
              <div>
                <h4 className="text-gray-700 font-semibold">24/7</h4>
                <p className="text-gray-700">Customer Support</p>
              </div>
            </div>
          </div>
          <div className="flex items-center" data-aos="fade-up" data-aos-delay="300">
            <button className="bg-yellow-500 px-3 py-3 rounded-lg mr-4 hover:bg-yellow-400 text-black">Hire Me</button>
            <a className="flex items-center text-yellow-500 font-semibold" href={CV} download={CV.pdf}>
              Download CV
              <BsDownload className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

