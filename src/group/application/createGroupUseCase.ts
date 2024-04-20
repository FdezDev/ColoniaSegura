import { Group } from "../domain/group";
import { GroupRepository } from "../domain/groupRepository";

export class CreateGroupUseCase{
    constructor(readonly groupRepository: GroupRepository){}
    async run (name: string): Promise<Group | null>{
        try {
            const createGroup =  await this.groupRepository.createGroup(name);
            return createGroup 
        } catch (error) {
            console.error("error in createUsecase", error);
            return null;
        }
    }
}