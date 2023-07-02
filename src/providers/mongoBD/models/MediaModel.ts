import mongoose, { Schema, Document } from 'mongoose';
import { Media } from '../../../entities/Media';

const db = mongoose.connection.useDb('Content');

export type IMediaSchema = Media & Document;

const MediaSchema: Schema = new Schema(
  {
    id: {type: String },
    assetId: { type: String },
    description: { type: String },
    nameAsset: { type: String },
    file: { type: [] },
  },
  {
    collection: 'Media',
  },
);

MediaSchema.set('toJSON', {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  transform(__: any, ret: any, _: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

const modelMedia = db.model<IMediaSchema>('Media', MediaSchema);

export default modelMedia;
