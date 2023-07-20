import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { ProductDTO } from "./saveProductsDTO";

export class saveProductsUseCase {
    constructor(
        private productRepository: IProductRepository,
    ) {}
    async execute(
        data: ProductDTO
    ) {
            const product = await this.productRepository.findById(data.id);
            console.log('product', product);
            if (product && product != undefined) {
                return new Error;
            } else {
                const prod = await this.productRepository.create(data.product);
                return prod
            }
    }
}