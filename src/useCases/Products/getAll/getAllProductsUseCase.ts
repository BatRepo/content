import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";

export class getAllProductsUseCase {
    constructor(
        private productRepository: IProductRepository,
    ) {}
    async execute(
        
    ) {
            const productsRepo = await this.productRepository.findAll();
            if(productsRepo && productsRepo != undefined) {
                return productsRepo;
            }
    }
}