import { createClient } from '@supabase/supabase-js'
import { products } from './data.js'

const supabase = createClient(
  'https://rqcklenhjdqlbqdurzha.supabase.co',
  'sb_publishable_lCHbDhN2CWzbez1ZbgSoqQ_3Kln37nj'
)

async function seed() {
  const formatted = products.map(item => ({
    id:           item.id,
    title:        item.title,
    price:        item.price,
    old_price:    item.oldPrice || '',
    image:        item.image,
    description:  item.description,
    brand:        item.brand,
    unit:         item.unit,
    in_stock:     item.inStock,
    rating:       item.rating,
    review_count: item.reviewCount,
    reviews:      item.reviews,
  }))

  const { error } = await supabase.from('products').insert(formatted)

  if (error) console.log('❌ Error:', error.message)
  else console.log('✅ Products insert ho gaye!')
}

seed()