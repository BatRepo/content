import { MediaRepository } from "../../repositories/MediaRepository";
import { ProductRepository } from "../../repositories/ProductRepository";
import { deleteProductsUseCase } from "../Products/delete/deleteProductUseCase";
import { saveProductsUseCase } from "../Products/save/saveProductsUseCase";
import { updateProductsUseCase } from "../Products/update/updateProductUseCase";
import { webhookContentController } from "./contentful/ContentfulController";
import { ContenfullWebhookUseCase } from "./contentful/ContentfulUseCase";

const mongoProductsRepository = new ProductRepository();

const mongoMediaRepository = new MediaRepository();

const productSaveUseCase = new saveProductsUseCase(
    mongoProductsRepository,
    mongoMediaRepository
);

const updateproduct = new updateProductsUseCase(
    mongoProductsRepository
);

const deleteproduct = new deleteProductsUseCase(
    mongoProductsRepository
);

const webhookContentfullusecase = new ContenfullWebhookUseCase(
    productSaveUseCase,
    mongoMediaRepository,
    updateproduct,
    deleteproduct
);

const webhookContentcontroller = new webhookContentController(webhookContentfullusecase);

export { webhookContentfullusecase, webhookContentcontroller }