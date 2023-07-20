import { IMediaRepository } from "../../../repositories/interfaces/IMediaRepository";
import { MediaDTO } from "./saveMediaDTO";
export class MediaUseCase {
    constructor(
        private mediaRepository: IMediaRepository,
    ) {}
    async execute(
        data: MediaDTO
    ) {
            const media = await this.mediaRepository
            console.log('product', product);
            if (product && product != undefined) {
                return  'product exist';
            } else {
                await this.productRepository.create(data.product);
            }
    }
}