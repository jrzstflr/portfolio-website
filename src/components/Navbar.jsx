import React from "react"
import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import CV from "../assets/cv.pdf"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const handleItemClick = () => {
    setMenu(false)
  }
  const items = [
    { id: 1, text: "About", href: "#about" },
    { id: 2, text: "Services", href: "#services" },
    { id: 3, text: "Work", href: "#work" },
    { id: 4, text: "Testimonials", href: "#testimonials" },
    { id: 5, text: "Contact", href: "#contact" },
  ]
  return (
    <div className="bg-yellow-50 text-black w-full">
      <div className="container mx-auto p04 hidden md:flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-1">
          <span className="text-black">Camille</span>
          <span className="text-yellow-500">Apilado</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center list-none text-lg">
          {items.map(({ id, text, href }) => (
            <li key={id}>
              <a href={href} className="hover:text-yellow-500 duration-200 cursor-pointer">
                {text}
              </a>
            </li>
          ))}
        </div>
        <a
          href={CV}
          download={CV.pdf}
          className="text-lg bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
        >
          Download CV
        </a>
      </div>
      <div className="flex w-full justify-between items-center md:hidden p-2 shadow-md">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-black">Camille</span>
          <span className="text-yellow-500">Apilado</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div onClick={() => setMenu(!menu)}>
            {menu ? <IoClose size={30} className="text-black" /> : <IoMdMenu size={30} className="text-black" />}
          </div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden bg-yellow-50 py-6 justify-center items-center ga-2 text-lg text-black flex flex-col list-none shadow-sm">
          {items.map(({ id, text, href }) => (
            <li key={id} className="hover:text-yellow-500 duration-200 cursor-pointer border-b w-11/12">
              <a href={href} onClick={handleItemClick}>
                {text}
              </a>
            </li>
          ))}

          <a
            href={CV}
            download={CV.pdf}
            className="text-lg bg-yellow-500 text-black px-4 py-2 mt-3 rounded hover:bg-yellow-400"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar

