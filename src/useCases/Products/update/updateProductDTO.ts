import { Product } from "../../../entities/Product";

export interface updateProductDTO {
    product: Product;
    id: string;
}