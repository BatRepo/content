import { IMediaRepository } from "../../../repositories/interfaces/IMediaRepository";
import castMedia from "../../../utils/castMedia";
import castProduct from "../../../utils/castProduct";
import { deleteProductsUseCase } from "../../Products/delete/deleteProductUseCase";
import { saveProductDTO } from "../../Products/save/saveProductsDTO";
import { saveProductsUseCase } from "../../Products/save/saveProductsUseCase";
import { updateProductsUseCase } from "../../Products/update/updateProductUseCase";
import { webhookContentDTO } from "./ContentfulDTO";

export class ContenfullWebhookUseCase {
    constructor(
        private saveProduct: saveProductsUseCase,
        private mediaRepository: IMediaRepository,
        private updateproduct: updateProductsUseCase,
        private deleteproduct: deleteProductsUseCase
    ) {}
    async execute(
        data: webhookContentDTO
    ) {
    const entryId = data?.sys?.id;
    const modeEntry = data?.sys?.type;
    let exeded = 0;
    const entry = data?.sys?.contentType?.sys?.id;
    const revision = data?.sys?.revision;
    
    if (entry === 'products') {
      if (modeEntry === 'DeletedEntry') {
        if (entryId) {
          const deleteEntry = await this.deleteproduct.execute({ ProductId: entryId});
          if (deleteEntry) {
            return 'delete product';
          }
          return undefined;
        }
      }
      if (modeEntry === 'Entry' && exeded == 0) {
        if (revision) {
          const product = castProduct(data, entryId);
          if (entryId && product) {
            const verifyExist = await this.updateproduct.execute({id: product.id, product });
            if (!verifyExist) {
              const save: saveProductDTO = { id: entryId, product };
              const productSave = await this.saveProduct.execute(save);
              exeded = 1;
              if (productSave) {
                return 'save product';
              }
            }
            exeded = 1;
            return 'update product';
          }
        }

      }
    }
    if (modeEntry === 'Asset' && exeded == 0) {
      console.log('mediaRevision', revision);
      if (revision) {
        const save = castMedia(data);
        if (save && save != undefined) {
          exeded = 1;
          const verifyExist = await this.mediaRepository.update(save.assetId, save);
          if (verifyExist === undefined || verifyExist != true) {
            const mediaSave = await this.mediaRepository.create(save);
            if (mediaSave) {
              return 'save media';
            }
          }
          return 'update media';
        }
        return undefined;
      }
    }
    }
}