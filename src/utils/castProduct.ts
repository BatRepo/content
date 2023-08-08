import { Product } from "../entities/Product";

const castProduct = (payload: any, entryId?: string): Product | undefined => {
    if (payload) {
        const product = new Product(
            {
              slug: payload?.fields.slug['en-US'], 
              price: payload?.fields.price['en-US'], 
              visible: payload?.fields.visible['en-US'],
              description: payload?.fields.description['en-US'],
              name: payload?.fields.name['en-US'],
              type_product: payload?.fields.typeProduct['en-US'],
              imagesId: payload?.fields.images?.['en-US'][0]?.sys?.id,
              sizes_imageId: payload?.fields.sizesImage?.['en-US']?.sys?.id
            },
            entryId
          );
          if (product) {
            return product;
          }
    }
    return undefined;
}

export default castProduct;