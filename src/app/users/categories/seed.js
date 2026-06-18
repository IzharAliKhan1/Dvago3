// import { supabase } from '../../../../lib/supabase'
// import { categories } from './data'

// async function seed() {
//   const formatted = categories.map(item => ({
//     id:           item.id,
//     title:        item.title,
//     price:        item.price,
//     old_price:    item.oldPrice,
//     image:        item.image,
//     description:  item.description,
//     brand:        item.brand,
//     rating:       item.rating,
//     review_count: item.reviewCount,
//     unit:         item.unit,
//     in_stock:     item.inStock,
//     reviews:      item.reviews,
//   }))

//   const { error } = await supabase.from('categories').insert(formatted)

//   if (error) console.log('Error:', error.message)
//   else console.log('✅ Data insert ho gaya!')
// }

// seed()









import { createClient } from '@supabase/supabase-js'
import { categories } from './data.js'

const supabase = createClient(
  'https://rqcklenhjdqlbqdurzha.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxY2tsZW5oamRxbGJxZHVyemhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNjYxMzUsImV4cCI6MjA5NjY0MjEzNX0.wYt-ojrkRnwPd86Lv5c2WaOT6CUFNp3S57yPjSJg1gU'
)

async function seed() {
  const formatted = categories.map(item => ({
    id:           item.id,
    title:        item.title,
    price:        item.price,
    old_price:    item.oldPrice,
    image:        item.image,
    description:  item.description,
    brand:        item.brand,
    rating:       item.rating,
    review_count: item.reviewCount,
    unit:         item.unit,
    in_stock:     item.inStock,
    reviews:      item.reviews,
  }))

  const { error } = await supabase.from('categories').insert(formatted)

  if (error) console.log('❌ Error:', error.message)
  else console.log('✅ Data insert ho gaya!')
}

seed()