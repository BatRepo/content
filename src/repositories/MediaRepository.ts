import { Media } from "../entities/Media";
import modelMedia from "../providers/mongoBD/models/MediaModel";
import { IMediaRepository } from "./interfaces/IMediaRepository";

export class MediaRepository implements IMediaRepository {
  private media = modelMedia;

    async create(m: Media): Promise<void> {
      try {
          const document = await this.media.create(m);
          return document.toObject();
      } catch (err) {
        console.log('erro user bd', err);
      }
    }

    // async findByEmail(mail: string): Promise<User> {
    //   try {
    //       const document = await this.user.findOne({ email: mail }).exec();
    //       if (!document) {
    //         throw new Error('User not found');
    //       }
    //       const user = new User({ name: document?.name.valueOf(), email: document?.email.valueOf() , password: document?.password.valueOf() }, document?._id.valueOf());
    //       return user;
    //   } catch (err) {
    //     console.log('Error accessing user in the database:', err);
    //     throw err;
    //   }
    // }

    async findById(id: string): Promise<Media> {
      try {
          const document = await this.media.findOne({ assetId: id });
          if (!document) {
            throw new Error('User not found');
          }
          const media = new Media({ assetId: document?.assetId.valueOf() , nameAsset: document?.nameAsset.valueOf(), description: document?.description.valueOf(), file: document?.file });
          return media;
      } catch (err) {
        console.log('Error accessing user in the database:', err);
        throw err;
      }
    }

    // async UserAlreadExists(mail: string): Promise<boolean> {
    //   try {
    //       const document = await this.user.findOne({email: mail});
    //       if (!document) {
    //         return false;
    //       }
    //       return true;
    //   } catch (err) {
    //     console.log('Error accessing user in the database:', err);
    //     throw err;
    //   }
    // }
}