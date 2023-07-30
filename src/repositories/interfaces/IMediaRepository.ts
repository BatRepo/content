import { Media } from "../../entities/Media";

export interface IMediaRepository {
    create(media: Media): Promise<void>;
    findById(id: string): Promise<Media>;
    mediaAlreadExists(id: string): Promise<Media | undefined>;
    update(assetId: string, updateData: Partial<Media>): Promise<Media | undefined>;
  }