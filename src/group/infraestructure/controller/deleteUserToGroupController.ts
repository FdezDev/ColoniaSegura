import { Request, Response } from 'express';
import { DeleteUserToGroupUseCase } from '../../application/deleteUserToGroupUseCase';

export class DeleteUserToGroupController {
    constructor(private deleteUserFromGroupUseCase: DeleteUserToGroupUseCase) {}

    async run(req: Request, res: Response) {
        const { userId, groupId } = req.body;  // Asegúrate de que estos campos son enviados con la solicitud

        try {
            const result = await this.deleteUserFromGroupUseCase.run(userId, groupId);
            if (result) {
                res.status(200).json({ message: "User successfully removed from group." });
            } else {
                res.status(400).json({ message: "Failed to remove user from group. Ensure the user and group are correct." });
            }
        } catch (error) {
            console.error("Error in GroupController:", error);
            res.status(500).json({ message: "Internal server error while trying to remove user from group." });
        }
    }
}