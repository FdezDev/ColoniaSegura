import { Request, Response } from 'express';
import { AddUserToGroupUseCase } from '../../application/addUserToGroupUseCase';

export class AddUserToGroupController {
    constructor(readonly addUserToGroupUseCase: AddUserToGroupUseCase) {}

    async run (req: Request, res: Response) {
        let { userId, groupId } = req.body;
        let result = await this.addUserToGroupUseCase.run(userId, groupId);
        if (result) {
            res.status(200).json({ message: "User added to group successfully." });
        } else {
            res.status(404).json({ message: "User or group not found." });
        }
    }
}