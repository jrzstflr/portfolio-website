import React from 'react';
import {BsDownload} from "react-icons/bs";
import avatarImg from "../assets/hero.png";
import CV from "../assets/cv.pdf";

const Hero = () => {
  return (
    <div className='text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm:px-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50'>
      <div className='w-full md:w-1/2 mb-10 text-center md:text-left'>
        <h3 className='text-base md:text-lg lg:text-xl mb-0 md:-mb-2 text-yellow-500'>Hello, I am</h3>
        <h1 className='text-2xl md:text-4xl lg:text-6xl my-0 md:-ml-1 font-bold py-2 md:py-2'>Camille Apilado</h1>
        <h3 className='text-base md:text-xl lg:text-2xl text-green-600'>Web Developer & Software Developer</h3>
        <p className='text-sm md:text-lg lg:text-2xl tracking-tighter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil modi placeat optio maiores dolor incidunt, reiciendis eaque, explicabo vero nam consequatur ab ducimus distinctio excepturi labore autem iste quae quod.</p>
        <div className='flex items-center justify-center md:justify-start gap-4 mt-5'>
            <button className='bg-yellow-500 px-10 py-1 rounded-lg mr-4 hover:bg-yellow-400 duration-200'>Hire Me</button>
            <a className='flex items-center text-yellow-500 font-semibold' href={CV} download="cv.pdf">
                Download CV <BsDownload className='ml-2 text-lg'/>
                </a>
        </div>
      </div>
      <div className='w-full md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end mb-20 md:mb-0'>
        <img className='max-w-full h-auto' src={avatarImg} alt="Avatar" />
      </div>
    </div>
  )
}

export default Hero
