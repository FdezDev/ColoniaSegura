import express from "express";
import { activateAlarmController, createAlarmController, desactivateAlarmController } from "./dependencies";

export const alarmRouter = express.Router();

alarmRouter.post(
    "/create",
    createAlarmController.run.bind(createAlarmController)
);

alarmRouter.post(
    '/activate',
    activateAlarmController.run.bind(activateAlarmController)
);

alarmRouter.post(
    '/desactivate',
    desactivateAlarmController.run.bind(desactivateAlarmController)
);