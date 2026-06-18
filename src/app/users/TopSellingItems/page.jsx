"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { products } from "./data";

export default function TopSellingItems() {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-100 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-lime-600">
          Top Selling Items
        </h1>
        <button className="bg-lime-500 hover:bg-lime-600 text-white px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl font-semibold transition duration-300">
          VIEW ALL
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 px-4">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/topselling/${item.id}`)}
            className="bg-white rounded-2xl border p-3 sm:p-4 hover:shadow-lg duration-300 relative flex flex-col cursor-pointer"
          >
            <button
              onClick={(e) => e.stopPropagation()}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-pink-500 text-lg sm:text-2xl"
            >
              ♡
            </button>
            <div className="relative w-full h-32 sm:h-40 md:h-44 lg:h-48">
              <Image src={item.image} alt={item.title} fill className="object-contain" />
            </div>
            <h2 className="text-xs sm:text-sm md:text-base font-semibold mt-3 line-clamp-2 leading-snug">
              {item.title}
            </h2>
            <p className="text-lime-600 font-bold text-sm sm:text-base md:text-lg mt-1">
              {item.price}
            </p>
            {item.oldPrice && (
              <p className="text-gray-400 line-through text-xs sm:text-sm">
                {item.oldPrice}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

