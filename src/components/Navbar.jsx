import React, { useState, useEffect } from "react"
import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import CV from "../assets/cv.pdf"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-yellow-50 bg-opacity-70 backdrop-filter backdrop-blur-lg text-black w-full transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto py-2 px-4 hidden md:flex justify-between items-center">
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
      <div className="flex w-full justify-between items-center md:hidden py-2 px-4">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-black">Camille</span>
          <span className="text-yellow-500">Apilado</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div onClick={() => setMenu(!menu)} className="p-2 rounded-full bg-yellow-500 text-white">
            {menu ? <IoClose size={24} /> : <IoMdMenu size={24} />}
          </div>
        </div>
      </div>
      {menu && (
        <div className="fixed top-12 left-0 right-0 md:hidden bg-yellow-50 bg-opacity-70 backdrop-filter backdrop-blur-lg py-4 justify-center items-center gap-2 text-lg text-black flex flex-col list-none shadow-sm">
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

