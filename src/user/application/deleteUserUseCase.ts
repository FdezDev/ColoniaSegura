import { UserRepository } from "../domain/userRepository";

export class DeleteUserUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(id: number): Promise<boolean> {
        try {
            const wasDeleted = await this.userRepository.deleteUser(id);
            return wasDeleted;
        } catch (error) {
            console.error("Error in DeleteUserUseCase:", error);
            return false;
        }
    }
}
