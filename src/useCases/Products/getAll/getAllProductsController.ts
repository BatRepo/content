import { Response } from "express";
import { getAllProductsUseCase } from "./getAllProductsUseCase";

export class getallProductsController {
    constructor(
        private getallusecase: getAllProductsUseCase,
    ) {}

    async handle(response: Response): Promise<Response> {
            try {
                    const products = this.getallusecase.execute();
                    if (products && products != undefined) {                   
                        return response.status(200).json(products).send();
                    }
                    return response.status(400).end();
                } catch {
                return response.status(400).json({
                    message: 'Unexpected error'
                });
        }
    }
}