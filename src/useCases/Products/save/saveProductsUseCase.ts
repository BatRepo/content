import { IMediaRepository } from "../../../repositories/interfaces/IMediaRepository";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { saveProductDTO } from "./saveProductsDTO";

export class saveProductsUseCase {
    constructor(
        private productRepository: IProductRepository,
        private mediaRepository: IMediaRepository,
    ) {}
    async execute(
        data: saveProductDTO
    ) {
            const product = await this.productRepository.findById(data.id);
            if (product && product != undefined) {
                const productUpdate = await this.productRepository.update(data.id, data.product);
                return productUpdate;
            } else {
                if (data.product.imagesId && data.product.imagesId != '') {
                    const mediaImagesRepo = await this.mediaRepository.findById(data.product.imagesId);
                    if (mediaImagesRepo && mediaImagesRepo != undefined) {
                        data.product.images = mediaImagesRepo;
                        if (data.product.sizes_imageId && data.product.sizes_imageId != '') {
                            const mediaSizesRepo = await this.mediaRepository.findById(data.product.sizes_imageId);
                            if (mediaSizesRepo) {
                                data.product.sizes_image = mediaSizesRepo;
                                const prod = await this.productRepository.create(data.product);
                                return prod;
                            }
                            const prod = await this.productRepository.create(data.product);
                            return prod;
                        }
                    }
                }
            }
    }
}