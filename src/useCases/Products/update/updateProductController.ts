import { Request, Response } from "express";
import { ProductsUseCase } from "./updateProductUseCase";

export class ProductsController {
    constructor(
        private loginUseCase: ProductsUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body; 
            try {
                if (email && password) {
                    const usertoken = await this.loginUseCase.execute({
                        email,
                        password
                    });
                    if (typeof usertoken != 'string' && usertoken != undefined) {                   
                        return response.status(200).header("Authorization", "Bearer " + usertoken.token).json({ user: usertoken }).send();
                    }
                    return response.status(401).end();
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