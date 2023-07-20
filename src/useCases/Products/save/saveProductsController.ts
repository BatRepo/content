import { Request, Response } from "express";
import { saveProductsUseCase } from "./saveProductsUseCase";

export class saveProductsController {
    constructor(
        private productUseCase: saveProductsUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { product } = request.body; 
            try {
                if (product) {
                    const produto = await this.productUseCase.execute(product);
                    if (produto) {
                        return response.status(200).json(produto).send();
                    }
                    return response.status(400).end();
                }
                return response.status(400).end();
            }
            catch {
                return response.status(400).json({
                    message: 'Unexpected error'
                });
        }
    }
}