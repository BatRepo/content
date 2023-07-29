import { mongoProductsRepository } from ".."
import { saveProductsUseCase } from "./saveProductsUseCase"

const productSaveUseCase = new saveProductsUseCase(
    mongoProductsRepository
)

export { productSaveUseCase }