import { Group } from "../../group/domain/group";
import { User } from "./user";

export interface UserRepository{
    addUser(name: string, last_name: string, phone: string, password: string, email: string ,groupId?: number): Promise<User | null>;
    deleteUser(id: number): Promise<boolean>;
    getAllUsers(): Promise<User[]>;
}