import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { deleteProductDTO } from "./deleteProductDTO";

export class deleteProductsUseCase {
    constructor(
        private productRepository: IProductRepository,
    ) {}
    async execute(
        data: deleteProductDTO
    ) {
        if (data) {
            const product = await this.productRepository.deleteEntry(data.ProductId);
            if (product && product != undefined) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}