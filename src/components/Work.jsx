import React from "react"
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"

const Work = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Bakery Landing Page Design",
      desciption:
        "A warm and inviting design showcasing delicious baked goods, crafted to drive customer engagement and orders.",
      workImage: work1,
    },
    {
      id: 2,
      title: "Shoe Store Ecommerce Landing Page",
      desciption:
        "A sleek and modern layout highlighting top products and promotions, designed for an easy shopping experience.",
      workImage: work2,
    },
    {
      id: 3,
      title: "ClearMix Landing Page",
      desciption:
        "A professional and clean design tailored to showcase ClearMix's services, enhancing credibility and conversions.",
      workImage: work3,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-yellow-500 font-semibold text-center uppercase mb-2" data-aos="fade-up">
        Work
      </h3>
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up" data-aos-delay="100">
        My Case Studies
      </h2>
      {caseStudies.map((study, index) => (
        <div
          key={study.id}
          className={`flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          data-aos-duration="1000"
          data-aos-delay={200 + index * 100}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-full lg:w-1/3 p-4">
            <img
              src={study.workImage || "/placeholder.svg"}
              alt="Work"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-yellow-500 mr-2">{`0${index + 1}`}</span>
              <h3 className="text-2xl font-semibold">{study.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{study.desciption}</p>
            <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Work

