import { Media } from "../../entities/Media";

export interface IMediaRepository {
    create(media: Media): Promise<void>;
    // findByEmail(email: string): Promise<User>;
    // UserAlreadExists(mail: string): Promise<boolean>;
    // findById(id: string): Promise<User>;
  }