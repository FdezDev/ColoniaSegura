import { AlarmaRepository } from "../domain/alarmRepository";


import { db } from '../../database/firebase/firebaseAdmin';

export class DesactivateAlarmUseCase {
    constructor(private alarmRepository: AlarmaRepository) {}

    async run(alarmId: number, userId: number): Promise<boolean> {
        const result = await this.alarmRepository.deactivateAlarm(alarmId, userId);
        if (result) {
            const alarmRef = db.ref('alarms/' + alarmId);
            alarmRef.update({ isActive: false });
        }
        return result;
    }
}