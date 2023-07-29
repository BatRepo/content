import { Media } from "./Media";

export class Product {
    public id!: string;
    public slug!: string;
    public price!: number;
    public visible!: boolean;
    public description!: string;
    public name!: string;
    public type_product!: string;
    public images!: Media;
    public sizes_image!: Media;

    constructor(props: Omit<Product, 'id'>, _id?: string) {
        Object.assign(this, props);

        if (_id && _id != undefined) {
            this.id = _id;
        }

    }
}
