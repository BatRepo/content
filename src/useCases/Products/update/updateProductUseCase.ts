import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { updateProductDTO } from "./updateProductDTO";

export class updateProductsUseCase {
    constructor(
        private productRepository: IProductRepository,
    ) {}
    async execute(
        data: updateProductDTO
    ) {
        if (data) {
            const product = await this.productRepository.update(data.id, data.product);
            if (product && product != undefined) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}