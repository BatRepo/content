import { Product } from "../../entities/Product";

export interface IProductRepository {
    create(user: Product): Promise<Product | undefined>;
    update(productId: string, updateData: Partial<Product>): Promise<boolean | undefined>;
    findAll(): Promise<Product[]>;
    findById(identify: string): Promise<Product | undefined>;
    deleteEntry(id: string): Promise<boolean | undefined> ;
  }