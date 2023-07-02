import mongoose, { Schema, Document } from 'mongoose';
import { Product } from '../../../entities/Product';

const db = mongoose.connection.useDb('Content');

export type IProductSchema = Product & Document;

const ProductSchema: Schema = new Schema(
  {
    id: {type: String },
    slug: { type: String },
    price: { type: Number },
    visible: { type: Boolean },
    description: { type: String },
    name: { type: String },
    type_product: { type: String },
    images: { type: [] },
    sizes_image: { type: [] },
  },
  {
    collection: 'Products',
  },
);

ProductSchema.set('toJSON', {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  transform(__: any, ret: any, _: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

const modelProduct = db.model<IProductSchema>('Products', ProductSchema);

export default modelProduct;
