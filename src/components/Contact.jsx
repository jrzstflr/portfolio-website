import React from "react"
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-gray-50 bg-gray-to-t from-white to-yellow-50">
      <div
        className="flex flex-1 flex-col px-6 mb-14"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-600">
          I am here to help! Reach out for any questions, support, or inquiries, and I will get back to you as soon as
          possible.
        </p>
        <div>
          <div className="space-y-4 text-gray-600">
            <FiMail className="text-yellow-500 w-6 h-6" />
            <span>camilleapilado165@gmail.com</span>
          </div>
          <div className="space-y-4 text-gray-600">
            <FiMapPin className="text-yellow-500 w-6 h-6" />
            <span>181 Mabini St. San Joaquin, Mabalacat City, Pampanga</span>
          </div>
          <div className="space-y-4 text-gray-600">
            <FiPhone className="text-yellow-500 w-6 h-6" />
            <span>+63 993-899-6720</span>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-anchor-placement="center-bottom"
      ></div>
    </div>
  )
}

export default Contact

