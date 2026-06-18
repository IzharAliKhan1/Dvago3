"use client"
import { useState } from "react"
import { useCart } from "@/app/CartContext"

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAdd}
      disabled={!product.inStock}
      className={`w-full mt-4 font-semibold py-3 rounded-xl transition ${
        !product.inStock
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : added
          ? "bg-green-500 text-white"
          : "bg-lime-600 hover:bg-lime-700 text-white"
      }`}
    >
      {!product.inStock ? "Out of Stock" : added ? "✓ Added to Cart!" : "ADD TO CART"}
    </button>
  )
}
