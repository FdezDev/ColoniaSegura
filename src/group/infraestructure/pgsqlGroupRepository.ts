import AlarmModel from "../../alarma/infraestructure/models/alarmModel";
import UserModel from "../../user/infraestructure/models/userModel";
import { Group } from "../domain/group";
import { GroupRepository } from "../domain/groupRepository";
import GroupModel from "./models/groupModel";


export class PgsqlGroupRepository implements GroupRepository{

    async createGroup(name: string): Promise<Group | null> {
        try {
            const createGroup = await GroupModel.create({name} as any);
            return new Group(createGroup. id,createGroup.name);
        } catch (error) {
            console.error("error en pgs", error);
            return null;
        }
    }


    async addUserToGroup(userId: number, groupId: number): Promise<boolean> {
        try {
            const user = await UserModel.findByPk(userId);
            if (user) {
                await user.update({ groupId });
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error adding user to group:", error);
            return false;
        }
    }


    async addAlarmToGroup(alarmId: number, groupId: number): Promise<boolean> {
        try {
            const group = await GroupModel.findByPk(groupId);
            if (!group) {
                console.error("Group not found");
                return false;
            }

            const alarm = await AlarmModel.findByPk(alarmId);
            if (!alarm) {
                console.error("Alarm not found");
                return false;
            }

            alarm.groupId = groupId;
            await alarm.save();
            return true;
        } catch (error) {
            console.error("Error adding alarm to group:", error);
            return false;
        }
    }


    
    async deleteUserToGroup(userId: number, groupId: number): Promise<boolean> {
        try {
            const user = await UserModel.findByPk(userId);
            if (!user) {
                console.error("User not found");
                return false;
            }

            // Verifica si el usuario realmente pertenece al grupo especificado
            if (user.groupId !== groupId) {
                console.error("User does not belong to the specified group");
                return false;
            }

            // Establece groupId a null para desvincular al usuario del grupo
            await user.update({ groupId: null } as any);
            return true;
        } catch (error) {
            console.error("Error removing user from group:", error);
            return false;
        }
    }

}