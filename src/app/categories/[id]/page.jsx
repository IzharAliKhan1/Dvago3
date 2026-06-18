"use client";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/CartContext";
import { categories } from "@/app/users/categories/data";

function StarRating({ rating, size = "sm" }) {
  const starSize = size === "lg" ? "text-xl sm:text-2xl" : "text-sm sm:text-base";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`${starSize} ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function RatingBar({ star, count, total }) {
  const percent = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="text-xs sm:text-sm text-gray-600 w-3 sm:w-4">{star}</span>
      <span className="text-yellow-400 text-xs sm:text-sm">★</span>
      <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2">
        <div className="bg-yellow-400 h-1.5 sm:h-2 rounded-full" style={{ width: `${percent}%` }} />
      </div>
      <span className="text-xs sm:text-sm text-gray-500 w-3 sm:w-4">{count}</span>
    </div>
  );
}

export default function CategoriesDetailPage({ params }) {
  const { id } = use(params);
  const product = categories.find((p) => p.id === Number(id));
  const relatedProducts = categories.filter((p) => p.id !== Number(id)).slice(0, 5);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-lime-600 px-6 py-3 text-white font-semibold hover:bg-lime-700">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: product.reviews?.filter((r) => r.rating === star).length || 0,
  }));

  const discount = product.oldPrice
    ? Math.round(
        ((parseFloat(product.oldPrice.replace("$", "")) -
          parseFloat(product.price.replace("$", ""))) /
          parseFloat(product.oldPrice.replace("$", ""))) * 100
      )
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-lime-600">Home</Link>
        <span className="mx-1 sm:mx-2">›</span>
        <Link href="/" className="hover:text-lime-600">Categories</Link>
        <span className="mx-1 sm:mx-2">›</span>
        <span className="text-gray-800 font-medium">{product.title}</span>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <div className="relative flex items-center justify-center bg-lime-50 rounded-xl h-56 sm:h-72 md:h-80 border border-lime-100">
            <Image src={product.image} alt={product.title} fill className="object-contain p-4 sm:p-6" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block bg-lime-100 text-lime-700 text-xs font-semibold px-3 py-1 rounded-full">
              Category 🛍️
            </span>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug">{product.title}</h1>
            <div className="flex items-center gap-2 sm:gap-3">
              <StarRating rating={product.rating} />
              <span className="text-xs sm:text-sm text-gray-500">{product.reviewCount} Ratings</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Brand: <span className="text-lime-600 font-medium">{product.brand}</span>
            </p>
            <div className="flex items-center flex-wrap gap-2 sm:gap-4">
              <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</span>
              {product.oldPrice && <span className="text-gray-400 line-through text-sm sm:text-lg">{product.oldPrice}</span>}
              {discount && <span className="bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-lg">{discount}% OFF</span>}
            </div>
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-gray-700">
              <span className="w-2 h-2 rounded-full bg-lime-500 inline-block"></span>
              {product.unit}
            </div>
            <p className={`text-xs sm:text-sm font-medium ${product.inStock ? "text-green-500" : "text-red-400"}`}>
              {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span>🚚</span>
              <span>Delivers in: <span className="font-medium text-gray-800">2-3 Business Days</span></span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 font-semibold py-2.5 sm:py-3 rounded-xl transition text-sm sm:text-base ${
                  !product.inStock
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : added
                    ? "bg-green-500 text-white"
                    : "bg-lime-600 hover:bg-lime-700 text-white"
                }`}
              >
                {!product.inStock ? "Out of Stock" : added ? "✓ Added to Cart!" : "ADD TO CART"}
              </button>
              <button className="flex-1 font-semibold py-2.5 sm:py-3 rounded-xl border-2 border-lime-500 text-lime-600 hover:bg-lime-50 transition text-sm sm:text-base">
                ♡ Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-4 sm:mt-6">
          <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Description</h2>
          <p className="text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base">{product.description}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-4 sm:mt-6">
          <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Ratings & Reviews</h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-2 sm:min-w-[120px]">
              <span className="text-5xl sm:text-6xl font-bold text-gray-900">{product.rating}</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs sm:text-sm font-semibold text-lime-600 bg-lime-50 px-3 py-1 rounded-full">Excellent</span>
                <StarRating rating={product.rating} size="lg" />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              {ratingCounts.map(({ star, count }) => (
                <RatingBar key={star} star={star} count={count} total={product.reviews?.length || 1} />
              ))}
            </div>
          </div>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {product.reviews?.map((review, i) => (
              <div key={i} className="border-t pt-4 sm:pt-5">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-xl font-bold text-gray-900 border-l-4 border-lime-500 pl-3 mb-3 sm:mb-4">
            Related Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/categories/${item.id}`} className="bg-white rounded-xl shadow-sm p-2 sm:p-3 hover:shadow-md transition group">
                <div className="relative h-20 sm:h-28 w-full mb-2 sm:mb-3">
                  <Image src={item.image} alt={item.title} fill className="object-contain" />
                </div>
                <p className="text-xs text-gray-700 font-medium line-clamp-2 group-hover:text-lime-600">{item.title}</p>
                <p className="text-lime-600 font-bold text-xs sm:text-sm mt-1">{item.price}</p>
                {item.oldPrice && <p className="text-gray-400 line-through text-xs">{item.oldPrice}</p>}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
