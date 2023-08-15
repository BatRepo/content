import { Request, Response } from "express";
import { getProductUseCase } from "./getProductsUseCase";

export class getProductController {
    constructor(
        private getuseCase: getProductUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { productId } = request.body; 
            try {
                if (productId) {
                    const product = await this.getuseCase.execute({ productId });
                    if (product && product != undefined) {                   
                        return response.status(200).json({ product });
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