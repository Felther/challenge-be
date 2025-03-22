/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ProductsController = () => import('#controllers/products_controller')
import router from '@adonisjs/core/services/router'

// router.get('/', async () => {
//   return {
//     hello: 'world and testing the watcher',
//   }
// })

router
  .group(() => {
    router.resource('products', ProductsController).apiOnly()
  })
  .prefix('api')
