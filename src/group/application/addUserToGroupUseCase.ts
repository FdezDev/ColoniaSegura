import { GroupRepository } from "../domain/groupRepository";


export class AddUserToGroupUseCase {
    constructor(private groupRepository: GroupRepository) {}

    async run(userId: number, groupId: number): Promise<boolean> {
        return this.groupRepository.addUserToGroup(userId, groupId);
    }
}