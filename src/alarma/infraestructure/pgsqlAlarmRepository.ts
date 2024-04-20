import UserModel from "../../user/infraestructure/models/userModel";
import { Alarma } from "../domain/alarma";
import { AlarmaRepository } from "../domain/alarmRepository";
import AlarmModel from "./models/alarmModel";

export class PgsqlAlarmRepository implements AlarmaRepository{
    
    async createAlarm(name: string, phone: number, isActive: boolean, groupId: number): Promise<Alarma | null> {
        try {
            const createdAlarm = await AlarmModel.create({name, phone, groupId, isActive} as any);
            return new Alarma(createdAlarm.id, createdAlarm.name, createdAlarm.phone, createdAlarm.isActive, createdAlarm.groupId,);
        } catch (error) {
            console.error("Error In Pgsq", error);
            return null;
        }
    }


    async activateAlarm(alarmId: number, userId: number): Promise<boolean> {
        // Intenta encontrar al usuario basándote en el ID proporcionado.
        const user = await UserModel.findByPk(userId);
        if (!user) {
            console.error("User not found");
            return false;
        }

        // Intenta encontrar la alarma basándote en el ID proporcionado.
        const alarm = await AlarmModel.findByPk(alarmId);
        if (!alarm) {
            console.error("Alarm not found");
            return false;
        }

        // Verifica si el grupo de la alarma coincide con el grupo del usuario.
        if (alarm.groupId !== user.groupId) {
            console.error("User does not belong to the group associated with this alarm");
            return false;
        }

        // Verifica si la alarma ya está activa.
        if (alarm.isActive) {
            console.error("Alarm is already active");
            return false;
        }

        // Activa la alarma y guarda los cambios en la base de datos.
        alarm.isActive = true;
        await alarm.save();
        return true;
    }

    async deactivateAlarm(alarmId: number, userId: number): Promise<boolean> {
        const user = await UserModel.findByPk(userId);
        if (!user) {
            console.error("User not found");
            return false;
        }

        const alarm = await AlarmModel.findByPk(alarmId);
        if (!alarm || alarm.groupId !== user.groupId) {
            console.error("Alarm not found or user does not belong to the alarm's group");
            return false;
        }

        if (!alarm.isActive) {
            console.error("Alarm is already inactive");
            return false;
        }

        alarm.isActive = false;
        await alarm.save();
        return true;
    }

}