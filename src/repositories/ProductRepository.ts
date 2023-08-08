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
  
    async update(productId: string, updateData: Partial<Product>): Promise<boolean | undefined> {
      try {
          const existingDocument = await this.product.findOne({ id: productId });
          if (existingDocument) {
            const document = await this.product.updateOne({ id: productId }, updateData);
            if (document.modifiedCount > 0) {
              return true;
            } else {
                return false;
            }
          }
          return false;
      } catch (err) {
          console.log('erro user bd', err);
          return undefined;
      }
  }

    async findById(identify: string): Promise<Product | undefined> {
      try {
          const document = await this.product.findOne({ id: identify }).lean();
          if (!document) {
            return undefined;
          }
          const { _id, ...rest } = document;
          return new Product(rest, _id);
      } catch (err) {
        console.log('Error accessing user in the database:', err);
        throw err;
      }
    }

    async findAll(): Promise<Product[]> {
      try {
        const documents = await this.product.find({}).lean();
        const products: Product[] = documents.map((document: any) => {
          const { id, ...rest } = document;
          return new Product(rest, id);
        });
        return products;
      } catch (err) {
        console.log('Error accessing products in the database:', err);
        throw new Error('Error accessing products in the database');
      }
    }

    async deleteEntry(id: string): Promise<boolean | undefined> {
      try {
          if (!id) {
              throw new Error('Invalid id'); // Throw an error if id is not provided
          }
  
          const existingEntry = await this.product.findOne({ id: id });
  
          if (existingEntry) {
              const deletionResult = await this.product.deleteOne({ id: id });
  
              if (deletionResult.deletedCount && deletionResult.deletedCount > 0) {
                  return true; // Entry deleted successfully
              } else {
                  return false; // Deletion was not successful
              }
          } else {
              return false; // Entry with the provided id doesn't exist
          }
      } catch (err) {
          console.log('error deleting entry', err);
          return undefined;
      }
  }

}