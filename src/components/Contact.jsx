import React from 'react';
import {FiMail, FiMapPin, FiPhone} from "react-icons/fi";

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-gray-50 bg-gray-to-t from-white to-yellow-50'>
        <div className='flex flex-1 flex-col px-6 mb-14'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Contact Us</h2>
            <p className='mb-6 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
                <div className='space-y-4 text-gray-600'>
                <FiMail className='text-yellow-500 w-6 h-6'/>
                <span>Example@yahoo.com</span>
                </div>
                <div className='space-y-4 text-gray-600'>
                <FiMapPin className='text-yellow-500 w-6 h-6'/>
                <span>123 ABC St., New York City, NY</span>
                </div>
                <div className='space-y-4 text-gray-600'>
                <FiPhone className='text-yellow-500 w-6 h-6'/>
                <span>209-781-8558</span>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Contact
