
import { Request, Response } from 'express';
import { AddAlarmToGroupUseCase } from '../../application/addAlarmaToGroupUsecase';

export class AddAlarmToGroupController {
    constructor(private addAlarmToGroupUseCase: AddAlarmToGroupUseCase) {}

    async run(req: Request, res: Response) {
        const { alarmId, groupId } = req.body;

        const result = await this.addAlarmToGroupUseCase.run(alarmId, groupId);
        if (result) {
            res.status(200).json({
                message: "Alarm successfully assigned to group."
            });
        } else {
            res.status(400).json({
                message: "Failed to assign alarm to group. Ensure both alarm and group exist."
            });
        }
    }
}
