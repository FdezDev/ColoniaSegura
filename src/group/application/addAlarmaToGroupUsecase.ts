import { GroupRepository } from "../domain/groupRepository";


export class AddAlarmToGroupUseCase {
    constructor(private groupRepository: GroupRepository) {}

    async run(alarmId: number, groupId: number): Promise<boolean> {
        return this.groupRepository.addAlarmToGroup(alarmId, groupId);
    }
}