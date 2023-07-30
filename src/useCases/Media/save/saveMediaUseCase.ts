import { IMediaRepository } from "../../../repositories/interfaces/IMediaRepository";
import { saveMediaDTO } from "./saveMediaDTO";
export class saveMediaUseCase {
    constructor(
        private mediaRepository: IMediaRepository,
    ) {}
    async execute(
        data: saveMediaDTO
    ) {
        try {
            await this.mediaRepository.create(data.media);
        } catch {
            throw new Error;
        }
    }
}