import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { updateProductDTO } from "./updateProductDTO";

export class updateProductsUseCase {
    constructor(
        private productRepository: IProductRepository,
    ) {}
    async execute(
        data: updateProductDTO
    ) {
            const product = await this.productRepository.update(data.id, data.product);
            console.log('product', product);
            if (product && product != undefined) {
                return product;
            } else {
                return new Error;
            }
    }
}