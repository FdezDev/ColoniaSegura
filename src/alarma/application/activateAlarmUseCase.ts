import { AlarmaRepository } from "../domain/alarmRepository";
import { db } from '../../database/firebase/firebaseAdmin'

export class ActivateAlarmUseCase {
    constructor(private alarmRepository: AlarmaRepository) {}

    async run(alarmId: number, userId: number): Promise<boolean> {
        const result = await this.alarmRepository.activateAlarm(alarmId, userId);
        if (result) {
            const alarmRef = db.ref('alarms/' + alarmId);
            alarmRef.update({ isActive: true });
        }
        return result;
    }
}