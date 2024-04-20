import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../application/getAllUserUseCase";

export class GetAllUsersController {
    constructor(readonly getAllUsersUseCase: GetAllUsersUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const users = await this.getAllUsersUseCase.run();
            res.status(200).send({
                status: "success",
                data: users
            });
        } catch (error) {
            console.error("Error in GetAllUsersController:", error);
            res.status(500).send({
                status: "error",
                Message: "Internal Server Error"
            });
        }
    }
}
