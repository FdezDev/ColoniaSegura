import { GroupRepository } from "../domain/groupRepository";


export class DeleteUserToGroupUseCase {
    constructor(private groupRepository: GroupRepository) {}

    async run(userId: number, groupId: number): Promise<boolean> {
        return this.groupRepository.deleteUserToGroup(userId, groupId);
    }
}