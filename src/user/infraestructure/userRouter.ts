import express from "express";
import { adduserController, deleteUserController, getAllUserController, getAllUsersUseCase } from "./dependencies";

export const userRouter = express.Router();

userRouter.post(
    "/create",
    adduserController.run.bind(adduserController)
);

// Ruta para eliminados usuarios
userRouter.delete(
    "/delete/:id",
    deleteUserController.run.bind(deleteUserController)
);

userRouter.get(
    '/',
    getAllUserController.run.bind(getAllUserController)
);