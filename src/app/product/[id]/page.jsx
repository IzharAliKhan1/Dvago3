// import Image from "next/image"
// import Link from "next/link"
// import { categories } from "@/app/users/categories/data"

// export default function ProductDetailPage({ params }) {
//   const productId = Number(params.id)
//   const product = categories.find((item) => item.id === productId)

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             Product not found
//           </h1>
//           <p className="text-gray-600 mb-6">
//             The item you are looking for does not exist or may have been removed.
//           </p>
//           <Link href="/" className="inline-flex items-center justify-center rounded-full bg-lime-600 px-6 py-3 text-white font-semibold hover:bg-lime-700">
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
//         <div className="rounded-4xl overflow-hidden bg-white shadow-xl">
//           <div className="relative h-96 w-full bg-gray-100">
//             <Image src={product.image} alt={product.title} fill className="object-contain" />
//           </div>
//         </div>

//         <div className="space-y-6">
//           <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-lime-700 hover:text-lime-800">
//             ← Back to home
//           </Link>

//           <div className="rounded-4xl bg-white p-8 shadow-xl">
//             <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
//             <div className="flex flex-wrap items-center gap-4 mt-4">
//               <p className="text-3xl font-extrabold text-lime-600">{product.price}</p>
//               {product.oldPrice ? (
//                 <p className="text-gray-400 line-through">{product.oldPrice}</p>
//               ) : null}
//             </div>
//             <p className="mt-6 text-gray-700 leading-8">{product.description}</p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="rounded-2xl bg-lime-600 px-8 py-4 text-white font-semibold hover:bg-lime-700">
//                 Add to cart
//               </button>
//               <button className="rounded-2xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 hover:bg-gray-50">
//                 Buy now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }















// import Image from "next/image"
// import Link from "next/link"
// import { categories } from "@/app/users/categories/data"

// export default async function ProductDetailPage({ params }) {
//   const { id } = await params  // ✅ await lagao
//   const productId = Number(id)
//   const product = categories.find((item) => item.id === productId)

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             Product not found
//           </h1>
//           <p className="text-gray-600 mb-6">
//             The item you are looking for does not exist or may have been removed.
//           </p>
//           <Link href="/" className="inline-flex items-center justify-center rounded-full bg-lime-600 px-6 py-3 text-white font-semibold hover:bg-lime-700">
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
//         <div className="rounded-4xl overflow-hidden bg-white shadow-xl">
//           <div className="relative h-96 w-full bg-gray-100">
//             <Image src={product.image} alt={product.title} fill className="object-contain" />
//           </div>
//         </div>

//         <div className="space-y-6">
//           <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-lime-700 hover:text-lime-800">
//             ← Back to home
//           </Link>

//           <div className="rounded-4xl bg-white p-8 shadow-xl">
//             <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
//             <div className="flex flex-wrap items-center gap-4 mt-4">
//               <p className="text-3xl font-extrabold text-lime-600">{product.price}</p>
//               {product.oldPrice ? (
//                 <p className="text-gray-400 line-through">{product.oldPrice}</p>
//               ) : null}
//             </div>
//             <p className="mt-6 text-gray-700 leading-8">{product.description}</p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="rounded-2xl bg-lime-600 px-8 py-4 text-white font-semibold hover:bg-lime-700">
//                 Add to cart
//               </button>
//               <button className="rounded-2xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 hover:bg-gray-50">
//                 Buy now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }










import Image from "next/image"
import Link from "next/link"
import { categories } from "@/app/users/categories/data"
import AddToCartButton from "@/app/product/AddToCartButton"

function StarRating({ rating, size = "sm" }) {
  const starSize = size === "lg" ? "text-2xl" : "text-base"
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`${starSize} ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  )
}

function RatingBar({ star, count, total }) {
  const percent = total > 0 ? (count / total) * 100 : 0
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-4">{star}</span>
      <span className="text-yellow-400 text-sm">★</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${percent}%` }} />
      </div>
      <span className="text-sm text-gray-500 w-4">{count}</span>
    </div>
  )
}

export default async function ProductDetailPage({ params }) {
  const { id } = params
  const productId = Number(id)
  const product = categories.find((item) => item.id === productId)
  const relatedProducts = categories.filter((item) => item.id !== productId).slice(0, 5)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">The item you are looking for does not exist or may have been removed.</p>
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-lime-600 px-6 py-3 text-white font-semibold hover:bg-lime-700">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: product.reviews?.filter((r) => r.rating === star).length || 0,
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b px-6 py-3 text-sm text-gray-500">
        <Link href="/" className="hover:text-lime-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/" className="hover:text-lime-600">Categories</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">{product.title}</span>
      </div>

      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Image */}
          <div className="relative flex items-center justify-center bg-gray-50 rounded-xl h-80 border">
            <Image src={product.image} alt={product.title} fill className="object-contain p-6" />
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500">{product.reviewCount} Ratings</span>
            </div>

            <p className="text-sm text-gray-500">Brand: <span className="text-lime-600 font-medium">{product.brand}</span></p>

            <div className="flex items-center gap-4 mt-2">
              <span className="text-2xl font-bold text-gray-900">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">{product.oldPrice}</span>
              )}
            </div>

            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 text-sm font-medium text-gray-700">
              <span className="w-2 h-2 rounded-full bg-lime-500 inline-block"></span>
              {product.unit}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <span className="text-lime-600">🚚</span>
              <span>Delivers in: <span className="font-medium text-gray-800">2-3 Business Days</span></span>
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{product.title} Description</h2>
          <p className="text-gray-600 leading-7">{product.description}</p>
        </div>

        {/* Ratings & Reviews */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Ratings & Reviews</h2>
          <div className="flex flex-col md:flex-row gap-8">

            {/* Left - Overall */}
            <div className="flex flex-col items-center justify-center min-w-[120px]">
              <span className="text-6xl font-bold text-gray-900">{product.rating}</span>
              <span className="text-sm font-semibold text-lime-600 bg-lime-50 px-3 py-1 rounded-full mt-1">Excellent</span>
              <StarRating rating={product.rating} size="lg" />
            </div>

            {/* Right - Bars */}
            <div className="flex-1 space-y-2">
              {ratingCounts.map(({ star, count }) => (
                <RatingBar key={star} star={star} count={count} total={product.reviews?.length || 1} />
              ))}
              <div className="flex gap-3 mt-4">
                {[5, 4, 3, 2, 1].map((s) => (
                  <button key={s} className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 text-sm hover:border-lime-500">
                    <span className="text-yellow-400">★</span> {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="mt-8 space-y-6">
            {product.reviews?.map((review, i) => (
              <div key={i} className="border-t pt-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-2 text-gray-600 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-lime-600 pl-3">Related Products</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-lime-600 text-white flex items-center justify-center hover:bg-lime-700">‹</button>
              <button className="w-8 h-8 rounded-full bg-lime-600 text-white flex items-center justify-center hover:bg-lime-700">›</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`} className="bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition group">
                <div className="relative h-28 w-full mb-3">
                  <Image src={item.image} alt={item.title} fill className="object-contain" />
                </div>
                <p className="text-xs text-gray-700 font-medium line-clamp-2 group-hover:text-lime-600">{item.title}</p>
                <p className="text-lime-600 font-bold text-sm mt-1">{item.price}</p>
                {item.oldPrice && <p className="text-gray-400 line-through text-xs">{item.oldPrice}</p>}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}