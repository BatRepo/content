import { Product } from "../../entities/Product";

export interface IProductRepository {
    create(user: Product): Promise<Product | undefined>;
    update(productId: string, updateData: Partial<Product>): Promise<Product | undefined>;
    // findByEmail(email: string): Promise<User>;
    // UserAlreadExists(mail: string): Promise<boolean>;
    findById(id: string): Promise<Product>;
  }