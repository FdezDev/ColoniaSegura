import { Group } from "./group";

export interface GroupRepository{

    createGroup(name: string): Promise<Group | null>;

    addUserToGroup(userId: number, groupId: number): Promise<boolean>;
    deleteUserToGroup(userId: number, groupId: number): Promise<boolean>;
    
    addAlarmToGroup(alarmId: number, groupId: number): Promise<boolean>;
}