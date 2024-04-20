import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class GetAllUsersUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(): Promise<User[]> {
        return this.userRepository.getAllUsers();
    }
}
