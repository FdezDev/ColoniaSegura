import { Request, Response } from 'express';
import { ActivateAlarmUseCase } from '../../application/activateAlarmUseCase';

export class ActivateAlarmController {
    constructor(private activateAlarmUseCase: ActivateAlarmUseCase) {}

    async run(req: Request, res: Response) {
        const { alarmId, userId } = req.body;

        const result = await this.activateAlarmUseCase.run(alarmId, userId);
        if (result) {
            res.status(200).json({ message: "Alarm activated successfully." });
        } else {
            res.status(403).json({ message: "Failed to activate alarm. You may not have the right permissions." });
        }
    }
}