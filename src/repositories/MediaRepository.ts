import { Media } from "../entities/Media";
import modelMedia from "../providers/mongoBD/models/MediaModel";
import { IMediaRepository } from "./interfaces/IMediaRepository";

export class MediaRepository implements IMediaRepository {
  private media = modelMedia;

    async create(m: Media): Promise<Media | undefined> {
      try {
          const document = await this.media.create(m);
          const media = new Media({ assetId: document?.assetId.valueOf() , nameAsset: document?.nameAsset.valueOf(), description: document?.description.valueOf(), file: document?.file });
          return media;
      } catch (err) {
        console.log('erro user bd', err);
      }
    }

    async findById(id: string): Promise<Media | undefined> {
      try {
          const document = await this.media.findOne({ assetId: id });
          if (!document) {
            return undefined;
          }
          const media = new Media({ assetId: document?.assetId.valueOf() , nameAsset: document?.nameAsset.valueOf(), description: document?.description.valueOf(), file: document?.file });
          return media;
      } catch (err) {
        console.log('Error accessing user in the database:', err);
        throw err;
      }
    }

    async mediaAlreadExists(id: string): Promise<Media | undefined> {
      try {
          const document = await this.media.findOne({ assetId: id });
          if (!document) {
            return undefined;
          }
          const { _id, ...rest } = document.toObject();
          return new Media(rest, _id);
      } catch (err) {
        console.log('Error accessing user in the database:', err);
        throw err;
      }
    }

    async update(assetId: string, updateData: Partial<Media>): Promise<Media | undefined> {
      try {
          const document = await this.media.findByIdAndUpdate(assetId, updateData, { new: true });
          console.log('document', document);
          if (!document) {
              return undefined;
          }
          const { _id, ...rest } = document.toObject();
          return new Media(rest, _id);
      } catch (err) {
          console.log('erro user bd', err);
      }
  }
}