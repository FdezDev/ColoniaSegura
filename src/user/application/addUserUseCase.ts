import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class AddUserUseCase{
    constructor(readonly userRepository: UserRepository){}
    async run (name: string, last_name: string, phone: string, password: string, email: string, groupId: number): Promise<User | null>{
        try {
            const createdUser = await this.userRepository.addUser(name, last_name, phone, password, email, groupId);
            return createdUser;
        } catch (error) {
            console.error("Error in AdduserUserCase:", error);
            return null;
        }
    }
}