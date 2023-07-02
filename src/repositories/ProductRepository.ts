import { Product } from "../entities/Product";
import modelProduct from "../providers/mongoBD/models/ProductModel";
import { IProductRepository } from "./interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
  private product = modelProduct;

    async create(prod: Product): Promise<void> {
      try {
          const document = await this.product.create(prod);
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

    async findById(id: string): Promise<Product> {
      try {
          const document = await this.product.findOne({ id });
          if (!document) {
            throw new Error('User not found');
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