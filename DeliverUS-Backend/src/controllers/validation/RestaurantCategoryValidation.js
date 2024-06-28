import { check } from 'express-validator'
import { RestaurantCategory } from '../../models/models.js'

// ES UNA CLASE SOLUCIÓN - SE HA CREADO NUEVA

// solucion
const checkNuevaCategoriaNoExisiteYa = async (value, { req }) => {
  try {
    let cuenta = 0
    const allCategories = await RestaurantCategory.findAll()
    for (const category of allCategories) {
      if (category.name === value) {
        cuenta++ // también podría ser cuenta += 1 o cuenta = cuenta +1
      }
    } if (cuenta > 0) {
      return Promise.reject(new Error(`The category ${req.body.name} already exists`))
    } else { return Promise.resolve() }
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}

// solucion
const create = [
  check('name').exists().isString().isLength({ min: 1, max: 50 }).trim(),
  check('name').custom(checkNuevaCategoriaNoExisiteYa)
]
export { create }
