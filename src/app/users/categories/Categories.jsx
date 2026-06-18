// "use client"

// import { useRef } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { categories } from "@/app/users/categories/data"

// export default function Categories() {
//   const scrollRef = useRef(null)

//   const scroll = (direction) => {
//     const container = scrollRef.current
//     const scrollAmount = 300

//     if (direction === "left") {
//       container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
//     } else {
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" })
//     }
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-5xl font-bold text-[#7AB42C]">Categories</h1>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => scroll("left")}
//             className="w-12 h-12 rounded-full bg-[#7AB42C] text-white flex items-center justify-center hover:scale-105 duration-300"
//           >
//             <ChevronLeft size={15} />
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="w-12 h-12 rounded-full bg-[#7AB42C] text-white flex items-center justify-center hover:scale-105 duration-300"
//           >
//             <ChevronRight size={15} />
//           </button>
//         </div>
//       </div>

//       <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide">
//         {categories.map((item) => (
//           <Link
//             key={item.id}
//             href={`/categories/${item.id}`}
//             className="min-w-70 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center hover:shadow-lg hover:-translate-y-2 duration-300 cursor-pointer"
//           >
//             <div className="relative w-52 h-52">
//               <Image src={item.image} alt={item.title} fill className="object-contain" />
//             </div>

//             <h2 className="text-2xl text-black font-semibold mt-6">{item.title}</h2>
//             <p className="text-2xl text-black font-semibold mt-2">{item.price}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }








"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import supabase from "@/lib/supabase"

export default function Categories() {
  const scrollRef = useRef(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
      
      if (!error) setCategories(data)
    }
    fetchCategories()
  }, [])

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
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-5xl font-bold text-[#7AB42C]">Categories</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-[#7AB42C] text-white flex items-center justify-center hover:scale-105 duration-300">
            <ChevronLeft size={15} />
          </button>
          <button onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-[#7AB42C] text-white flex items-center justify-center hover:scale-105 duration-300">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((item) => (
          <Link key={item.id} href={`/categories/${item.id}`}
            className="min-w-70 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center hover:shadow-lg hover:-translate-y-2 duration-300 cursor-pointer">
            <div className="relative w-52 h-52">
              <Image src={item.image} alt={item.title} fill className="object-contain" />
            </div>
            <h2 className="text-2xl text-black font-semibold mt-6">{item.title}</h2>
            <p className="text-2xl text-black font-semibold mt-2">{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}