import { Product } from "../../../entities/Product";

export interface saveProductDTO {
    product: Product;
    id: string;
}