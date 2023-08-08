import { Request, Response } from "express";
import { ContenfullWebhookUseCase } from "./ContentfulUseCase";

export class webhookContentController {
    constructor(
        private webhookcontenfull: ContenfullWebhookUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response | undefined> {
            try {
                if (request.body) {
                    const statusUseCase = await this.webhookcontenfull.execute(request.body);
                    if (statusUseCase && statusUseCase != undefined) {
                        return response.status(200).json(statusUseCase).send();
                }
                return response.status(400).end();
            }
        } catch {
                return response.status(400).json({
                    message: 'Unexpected error'
                });
        }
    }
}