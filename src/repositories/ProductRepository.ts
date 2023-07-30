import { Product } from "../entities/Product";
import modelProduct from "../providers/mongoBD/models/ProductModel";
import { IProductRepository } from "./interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
  private product = modelProduct;

    async create(prod: Product): Promise<Product | undefined> {
      try {
          const document = await this.product.create(prod);
          const { _id, ...rest } = document.toObject();
          return new Product(rest, _id);
      } catch (err) {
        console.log('erro user bd', err);
      }
    }
  
    async update(productId: string, updateData: Partial<Product>): Promise<Product | undefined> {
      try {
          const document = await this.product.findByIdAndUpdate(productId, updateData, { new: true });
          if (!document) {
              throw new Error('Product not found');
          }
          const { _id, ...rest } = document.toObject();
          return new Product(rest, _id);
      } catch (err) {
          console.log('erro user bd', err);
      }
  }

    async findById(id: string): Promise<Product> {
      try {
          const document = await this.product.findOne({ id });
          if (!document) {
            throw new Error('Product not found');
          }
          // new Product({
          //   slug: document?.slug.valueOf(),
          //   price: document?.price.valueOf(),
          // });
          return document;
      } catch (err) {
        console.log('Error accessing user in the database:', err);
        throw err;
      }
    }

    async findAll(): Promise<Product[]> {
      try {
        const documents = await this.product.find({}).lean();
        const products: Product[] = documents.map((document: any) => {
          const { _id, ...rest } = document.toObject();
          return new Product(rest, _id);
        });
        return products;
      } catch (err) {
        console.log('Error accessing products in the database:', err);
        throw new Error('Error accessing products in the database');
      }
    }

}