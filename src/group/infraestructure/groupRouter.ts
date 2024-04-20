import express from "express";
import { addAlarmToGroupController, addUserToGroupController, createGroupController, deleteUserToGroupController } from "./dependencies";

export const groupRouter = express.Router();

groupRouter.post(
    "/create",
    createGroupController.run.bind(createGroupController)
);

groupRouter.post(
    '/addUserToGroup',
    addUserToGroupController.run.bind(addUserToGroupController)
);

groupRouter.post(
    "/addAlarmToGroup",
    addAlarmToGroupController.run.bind(addAlarmToGroupController)
);

groupRouter.delete(
    '/deleteUserToGroup',
    deleteUserToGroupController.run.bind(deleteUserToGroupController)
);