import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import UserModel from "./models/userModel";

export class PgsqlUserRepository implements UserRepository{
    
    async addUser(name: string, last_name: string, phone: string, password: string, email: string, groupId: number): Promise<User | null> {
        try {
            const createdUser = await UserModel.create({name, last_name, phone, password, email, groupId} as any);
            return new User(createdUser.id, createdUser.name, createdUser.last_name, createdUser.phone, createdUser.password, createdUser.email, createdUser.groupId);
        } catch (error) {
            console.error("Error In pgsql", error);
            return null;
        }
    }


    async deleteUser(id: number): Promise<boolean> {
        try {
            const result = await UserModel.destroy({ where: { id } });
            return result > 0; // Retorna true si se eliminó al menos un registro.
        } catch (error) {
            console.error("Error in PgsqlUsersRepository:", error);
            return false;
        }
    }




    async getAllUsers(): Promise<User[]> {

        try {
            const users = await UserModel.findAll();
            return users.map(user => new User(user.id, user.name, user.last_name, user.phone, user.email, user.password, user.groupId ));
        } catch (error) {
            console.error("Error in PgsqlUserRepository:", error);
            return [];
        }
    }


}