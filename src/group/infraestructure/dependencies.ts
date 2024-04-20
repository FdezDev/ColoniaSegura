import { PgsqlGroupRepository } from "./pgsqlGroupRepository";

import { CreateGroupUseCase } from "../application/createGroupUseCase";
import { CreateGroupController } from "./controller/createGroupController";

import { AddUserToGroupUseCase } from "../application/addUserToGroupUseCase";
import { AddUserToGroupController } from "./controller/addUserToGroupController";

import { AddAlarmToGroupUseCase } from "../application/addAlarmaToGroupUsecase";
import { AddAlarmToGroupController } from "./controller/addAlarmToGroupController";

import { DeleteUserToGroupUseCase } from "../application/deleteUserToGroupUseCase";
import { DeleteUserToGroupController } from "./controller/deleteUserToGroupController";

export const pgsqlGroupRepository = new PgsqlGroupRepository();

export const createGroupUseCase = new CreateGroupUseCase(pgsqlGroupRepository);
export const createGroupController = new CreateGroupController(createGroupUseCase);

export const addUserToGroupUseCase = new AddUserToGroupUseCase(pgsqlGroupRepository);
export const addUserToGroupController = new AddUserToGroupController(addUserToGroupUseCase);


export const addAlarmaToGroupUsecase = new AddAlarmToGroupUseCase(pgsqlGroupRepository);
export const addAlarmToGroupController = new AddAlarmToGroupController(addAlarmaToGroupUsecase);

export const deleteUserToGroupUseCase = new DeleteUserToGroupUseCase(pgsqlGroupRepository);
export const deleteUserToGroupController = new DeleteUserToGroupController(deleteUserToGroupUseCase);


