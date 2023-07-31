import { Product } from "../../entities/Product";

export interface IProductRepository {
    create(user: Product): Promise<Product | undefined>;
    update(productId: string, updateData: Partial<Product>): Promise<Product | undefined>;
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product | undefined>;
  }