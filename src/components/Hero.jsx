import React from "react"
import { BsDownload } from "react-icons/bs"
import avatarImg from "../assets/hero.png"
import CV from "../assets/cv.pdf"

const Hero = () => {
  return (
    <div className="text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm:px-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50">
      <div className="w-full md:w-1/2 mb-10 text-center md:text-left" data-aos="fade-right">
        <h3 className="text-base md:text-lg lg:text-xl mb-0 md:-mb-2 text-yellow-500">Hello, I am</h3>
        <h1 className="text-2xl md:text-4xl lg:text-6xl my-0 md:-ml-1 font-bold py-2 md:py-2">Camille Apilado</h1>
        <h3 className="text-base md:text-xl lg:text-2xl text-green-600">Junior Developer</h3>
        <p className="text-sm md:text-lg lg:text-2xl tracking-tighter">
          a passionate aspiring Junior Programmer with a knack for solving problems and creating efficient solutions
          through coding. I'm currently advancing my knowledge and skills as an Associate in Computer Technology student
          at Clark College of Science and Technology. With a solid foundation in logical thinking and programming
          basics, I'm eager to contribute to projects that challenge me to grow and improve. I pride myself on my
          willingness to learn and my dedication to delivering quality work in everything I do.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
          <button className="bg-yellow-500 px-10 py-1 rounded-lg mr-4 hover:bg-yellow-400 duration-200">Hire Me</button>
          <a className="flex items-center text-yellow-500 font-semibold" href={CV} download="cv.pdf">
            Download CV <BsDownload className="ml-2 text-lg" />
          </a>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end mb-20 md:mb-0"
        data-aos="fade-left"
      >
        <img className="max-w-full h-auto" src={avatarImg || "/placeholder.svg"} alt="Avatar" />
      </div>
    </div>
  )
}

export default Hero

