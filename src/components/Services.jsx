import React from 'react';
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='bg-white py-16 px-8'>
      <div className='container mx-auto px-6 lb:px-24 text-center'>
        <div className='mb-12'>
            <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Services</h3>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Check My Services</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
            <img src={service1} alt="Service 1"  className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Landing Page Design</h3>
            <p className='text-gray-600 mb-4'>Crafting visually engaging and user-friendly interfaces to attract and convert visitors.</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
        <img src={service2} alt="Service 2"  className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Branding</h3>
            <p className='text-gray-600 mb-4'>Building a strong and memorable identity through cohesive visuals and messaging.</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
        <img src={service3} alt="Service 3"  className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Mobile App Design</h3>
            <p className='text-gray-600 mb-4'>Designing intuitive and responsive apps for seamless user experiences on mobile devices.</p>
        </div>
      </div>
      <div className='mt-8 text-right'>
        <a className='flex items-center justify-end text-yellow-500 font-semibold hover:text-yellow-400' href="">
            Explore All Services <FaArrowRight className='ml-2'/>
        </a>
      </div>
    </div>
  )
}

export default Services
