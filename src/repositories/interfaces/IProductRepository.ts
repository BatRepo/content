import { Product } from "../../entities/Product";

export interface IProductRepository {
    create(user: Product): Promise<void>;
    // findByEmail(email: string): Promise<User>;
    // UserAlreadExists(mail: string): Promise<boolean>;
    findById(id: string): Promise<Product>;
  }