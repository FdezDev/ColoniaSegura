import { Alarma } from "./alarma";

export interface AlarmaRepository{
    createAlarm(name: string, phone:number, isActive: boolean, groupId?: number): Promise<Alarma | null>;
    activateAlarm(alarmId: number, userId: number): Promise<boolean>;
    deactivateAlarm(alarmId: number, userId: number): Promise<boolean>;
}