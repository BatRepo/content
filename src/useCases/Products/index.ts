import { MediaRepository } from "../../repositories/MediaRepository";
import { ProductRepository } from "../../repositories/ProductRepository";
import { getProductController } from "./get/getProductsController";
import { getProductUseCase } from "./get/getProductsUseCase";
import { getallProductsController } from "./getAll/getAllProductsController";
import { getAllProductsUseCase } from "./getAll/getAllProductsUseCase";
import { saveProductsUseCase } from "./save/saveProductsUseCase";
import { updateProductsUseCase } from "./update/updateProductUseCase";

const mongoProductsRepository = new ProductRepository();

const mongoMediaRepository = new MediaRepository();

const productupdateUseCase = new updateProductsUseCase(
    mongoProductsRepository
);

const productSaveUseCase = new saveProductsUseCase(
    mongoProductsRepository,
    mongoMediaRepository
);

const productgetUseCase = new getProductUseCase(mongoProductsRepository, mongoMediaRepository);

const productsgetallusecase = new getAllProductsUseCase(mongoProductsRepository);

const getproductcontroller = new getProductController(productgetUseCase);

const getallproductscontroller = new getallProductsController(productsgetallusecase);

export { productupdateUseCase,
    productSaveUseCase, 
    productsgetallusecase, 
    getproductcontroller, 
    getallproductscontroller
}