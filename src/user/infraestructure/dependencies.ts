import { PgsqlUserRepository } from "./pgsqlUserRepository";
import { AddUserUseCase } from "../application/addUserUseCase";
import { AddUserController } from "./controller/adduserController";
import { DeleteUserUseCase } from "../application/deleteUserUseCase";
import { DeleteUserController } from "./controller/deleteUser";
import { GetAllUsersUseCase } from "../application/getAllUserUseCase";
import { GetAllUsersController } from "./controller/getAllUserController";

export const pgsqlUserRepository = new PgsqlUserRepository();

export const addUserUseCase = new AddUserUseCase(pgsqlUserRepository);
export const adduserController = new AddUserController(addUserUseCase);

export const deleteUserUseCase =new DeleteUserUseCase(pgsqlUserRepository);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);


export const getAllUsersUseCase = new GetAllUsersUseCase(pgsqlUserRepository);
export const getAllUserController = new GetAllUsersController(getAllUsersUseCase);