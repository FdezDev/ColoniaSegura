import { Request, Response } from 'express';
import { DesactivateAlarmUseCase } from '../../application/desactivateAlarmUseCase';

export class DesactivateAlarmController {
    constructor(private deactivateAlarmUseCase: DesactivateAlarmUseCase) {}

    async run(req: Request, res: Response) {
        const { alarmId, userId } = req.body;

        const result = await this.deactivateAlarmUseCase.run(alarmId, userId);
        if (result) {
            res.status(200).json({ message: "Alarm deactivated successfully." });
        } else {
            res.status(403).json({ message: "Failed to deactivate alarm. You may not have the right permissions or the alarm is already inactive." });
        }
    }
}