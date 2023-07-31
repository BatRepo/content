import { MediaRepository } from "../../repositories/MediaRepository";
import { ProductRepository } from "../../repositories/ProductRepository";
import { saveProductsUseCase } from "../Products/save/saveProductsUseCase";
import { webhookContentController } from "./contentful/ContentfulController";
import { ContenfullWebhookUseCase } from "./contentful/ContentfulUseCase";

const mongoProductsRepository = new ProductRepository();

const mongoMediaRepository = new MediaRepository();

const productSaveUseCase = new saveProductsUseCase(
    mongoProductsRepository,
    mongoMediaRepository
);
const webhookContentfullusecase = new ContenfullWebhookUseCase(
    productSaveUseCase,
    mongoMediaRepository
);

const webhookContentcontroller = new webhookContentController(webhookContentfullusecase);

export { webhookContentfullusecase, webhookContentcontroller }