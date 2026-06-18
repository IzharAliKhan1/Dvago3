"use client"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import Image from "next/image"
import { products } from "./data"

const MothersDaySale = () => {
  const scrollRef = useRef(null)
  const router = useRouter()

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 300
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full bg-pink-200 py-6">

      {/* Banner */}
      <div className="text-center py-6 sm:py-8 bg-pink-400 mb-6 sm:mb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 text-pink-300 text-2xl sm:text-4xl flex flex-wrap gap-4 sm:gap-6 p-4">
          {Array(30).fill("♡").map((h, i) => <span key={i}>{h}</span>)}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide relative z-10 px-4">
          MOTHER DAY DISCOUNTS
        </h1>
        <p className="text-white text-base sm:text-xl mt-1 relative z-10">
          UP TO <span className="text-2xl sm:text-3xl font-extrabold">20%</span> OFF
        </p>
      </div>

      {/* Cards + Scroll Buttons */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 duration-300"
        >
          <ChevronLeft size={18} className="text-gray-600" />
        </button>

        <div ref={scrollRef} className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/mothersday/${item.id}`)}
              className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] bg-white rounded-2xl p-3 sm:p-4 flex flex-col relative hover:shadow-lg duration-300 flex-shrink-0 cursor-pointer"
            >
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-pink-400 hover:scale-110 duration-200"
              >
                <Heart size={18} />
              </button>

              <div className="relative w-full h-32 sm:h-40 md:h-48">
                <Image src={item.image} alt={item.title} fill className="object-contain" />
              </div>

              <h2 className="text-xs sm:text-sm text-gray-800 font-medium mt-3 leading-snug">{item.title}</h2>
              <p className="text-pink-500 font-bold mt-1 text-sm">{item.price}</p>
              <p className="text-gray-400 text-xs line-through">{item.oldPrice}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 duration-300"
        >
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 px-4">
        <button className="bg-pink-500 text-white text-sm sm:text-lg font-semibold px-12 sm:px-24 py-3 sm:py-4 hover:bg-pink-600 duration-300 tracking-widest w-full sm:w-auto max-w-xs sm:max-w-none">
          VIEW ALL
        </button>
      </div>

    </div>
  )
}

export default MothersDaySale