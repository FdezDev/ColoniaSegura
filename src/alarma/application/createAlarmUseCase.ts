import { Alarma } from "../domain/alarma";
import { AlarmaRepository } from "../domain/alarmRepository";

export class CreateAlarmUseCase{
    constructor(readonly alarmRepository: AlarmaRepository){}
    async run (name: string, phone: number, isActive: boolean, groupId: number, ): Promise<Alarma | null>{
        try {
            const createAlarm = await this.alarmRepository.createAlarm(name, phone, isActive, groupId);
            return createAlarm;
        } catch (error) {
            console.error("Error in CreateAlarma", error);
            return null;
        }
    }
}