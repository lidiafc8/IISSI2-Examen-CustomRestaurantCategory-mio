import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import * as RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'

const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
    // solucion
    .post(
      RestaurantCategoryValidation.create,
      handleValidation,
      RestaurantCategoryController.create
    )
}
export default loadFileRoutes
