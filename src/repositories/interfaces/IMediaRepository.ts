import { Media } from "../../entities/Media";

export interface IMediaRepository {
    create(media: Media): Promise<void>;
    findById(id: string): Promise<Media>
  }