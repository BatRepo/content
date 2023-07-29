import { mongoProductsRepository } from ".."
import { updateProductsUseCase } from "./updateProductUseCase"

const productupdateUseCase = new updateProductsUseCase(
    mongoProductsRepository
);

export { productupdateUseCase }