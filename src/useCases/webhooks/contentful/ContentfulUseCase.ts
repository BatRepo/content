import { Media } from "../../../entities/Media";
import { Product } from "../../../entities/Product";
import { IMediaRepository } from "../../../repositories/interfaces/IMediaRepository";
import { saveProductDTO } from "../../Products/save/saveProductsDTO";
import { saveProductsUseCase } from "../../Products/save/saveProductsUseCase";
import { webhookContentDTO } from "./ContentfulDTO";

export class ContenfullWebhookUseCase {
    constructor(
        private saveProduct: saveProductsUseCase,
        private mediaRepository: IMediaRepository,
    ) {}
    async execute(
        data: webhookContentDTO
    ) {
    const entryId = data?.sys?.id;
    const modeEntry = data?.sys?.type;
    let exeded = 0;
    const entry = data?.sys?.contentType?.sys?.id;
    
    if (entry === 'products') {
      if (modeEntry === 'DeletedEntry') {
        // Se o modo for delete -> cair no caso de uso de delete product
        // const productSlug = data.payload.fields?.slug;
        // console.log('productSlug', productSlug);
        // this.productRepository.delete(productSlug);
      }
      if (modeEntry === 'Entry' && exeded == 0) {
        const product = new Product(
          {
            slug: data?.fields.slug['en-US'], 
            price: data?.fields.price['en-US'], 
            visible: data?.fields.visible['en-US'],
            description: data?.fields.description['en-US'],
            name: data?.fields.name['en-US'],
            type_product: data?.fields.type_product['en-US'],
            imagesId: data?.fields.images?.['en-US'][0]?.sys?.id,
            sizes_imageId: data?.fields.sizes_image?.['en-US'][0]?.sys?.id
          },
          entryId
        );
        if (entryId && product) {
          console.log('product', product);
          const save: saveProductDTO = { id: entryId, product };
          const productSave = await this.saveProduct.execute(save);
          exeded = 1;
          if (productSave) {
            return 'save product';
          }
          return undefined;
        }
      }
    }
    if (modeEntry === 'Asset' && exeded == 0) {
      const save = new Media({
        assetId: data?.sys?.id,
        nameAsset: data?.fields?.title['en-US'],
        description: data?.fields?.description['en-US'],
        file: data?.fields?.file?.['en-US']?.url
      }, data?.sys?.id);
      console.log('save', save);
      if (save) {
        exeded = 1;
        const verifyExist = this.mediaRepository.update(save.assetId, save);
        if (verifyExist == undefined) {
          const mediaSave = await this.mediaRepository.create(save);
          if (mediaSave) {
            return 'save media';
          }
          return 'update media';
        }
      }
      return undefined;
    }
    }
}