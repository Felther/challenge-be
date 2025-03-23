import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  async store({ request, response }: HttpContext) {
    const productInfo = request.only([
      'name',
      'imageUrl',
      'type',
      'price',
      'seller',
      'availableSizes',
      'details',
      'sport',
    ])

    const product = new Product()
    product.name = productInfo.name
    product.imageUrl = productInfo.imageUrl
    product.type = productInfo.type
    product.price = productInfo.price
    product.seller = productInfo.seller
    product.availableSizes = productInfo.availableSizes
    product.details = productInfo.details
    product.sport = productInfo.sport

    await product.save()

    return response.status(201).json(product)
  }

  async index({ request, response }: HttpContext) {
    const qs = request.qs()

    let products = await Product.findManyBy(qs)
    return response.json(products)
  }

  async show({ params, response }: HttpContext) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ data: 'Product not found' })
    }

    return response.json(product)
  }

  async update({ params, request, response }: HttpContext) {
    const productInfo = request.only([
      'name',
      'imageUrl',
      'type',
      'price',
      'seller',
      'availableSizes',
      'details',
      'sport',
    ])

    const product = await Product.find(params.id)
    if (!product) {
      return response.status(404).json({ data: 'Product not found' })
    }

    product.name = productInfo.name
    product.imageUrl = productInfo.imageUrl
    product.type = productInfo.type
    product.price = productInfo.price
    product.seller = productInfo.seller
    product.availableSizes = productInfo.availableSizes
    product.details = productInfo.details
    product.sport = productInfo.sport

    await product.save()

    return response.status(200).json(product)
  }

  async destroy({ params, response }: HttpContext) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ data: 'Product not found' })
    }

    await product.delete()

    return response.status(204).json(null)
  }
}
