import { mongoProductsRepository } from ".."
import { saveProductsController } from "./saveProductsController"
import { saveProductsUseCase } from "./saveProductsUseCase"

const productSaveUseCase = new saveProductsUseCase(
    mongoProductsRepository
)

const productSaveController = new saveProductsController(
    productSaveUseCase
)

export { productSaveUseCase, productSaveController }