import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import productList from '#static/products.json' with { type: 'json' }

interface ProductInterface {
  name: string
  imageUrl: string
  type: string
  price: number
  seller: string
  availableSizes: string
  details: string
  sport: string
}

export default class extends BaseSeeder {
  async run() {
    const products: ProductInterface[] = productList.map((p) => ({
      name: p.name,
      imageUrl: p.image_url,
      type: p.type,
      price: p.price,
      seller: p.seller,
      availableSizes: p.available_sizes.join(','),
      details: p.details,
      sport: p.sport,
    }))

    await Product.createMany(products)
  }
}
