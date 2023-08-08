import { ProductWithMedia } from "../../../entities/Product";
import { IMediaRepository } from "../../../repositories/interfaces/IMediaRepository";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { getProductDTO } from "./getProductsDTO";

export class getProductUseCase {
    constructor(
        private productRepository: IProductRepository,
        private mediaRepository: IMediaRepository,
    ) {}
    async execute(
        data: getProductDTO
    ) {
            const productRepo = await this.productRepository.findById(data.productId);
            if(productRepo && productRepo != undefined) {
                const mediaImagesRepo = await this.mediaRepository.findById(productRepo.imagesId);
                if (mediaImagesRepo) {
                    const mediaSizesRepo = await this.mediaRepository.findById(productRepo.sizes_imageId);
                    const productwithmedia = new ProductWithMedia({ product: productRepo, media: [ mediaImagesRepo ] });
                    if (mediaSizesRepo) {
                        const productwithmedia = new ProductWithMedia({ product: productRepo, media: [ mediaImagesRepo, mediaSizesRepo ] });
                        return productwithmedia;
                    }
                    return productwithmedia;
                }
                return productRepo;
            }
    }
}