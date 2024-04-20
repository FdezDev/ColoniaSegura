import { PgsqlAlarmRepository } from "./pgsqlAlarmRepository";

import { CreateAlarmUseCase } from "../application/createAlarmUseCase";
import { CreateAlarmaController } from "./controller/createAlarmController";

import { ActivateAlarmUseCase } from "../application/activateAlarmUseCase";
import { ActivateAlarmController } from "./controller/activateAlarmController";

import { DesactivateAlarmUseCase } from "../application/desactivateAlarmUseCase";
import { DesactivateAlarmController } from "./controller/desactivateAlarmController";

export const pgsqlAlarmRepository = new PgsqlAlarmRepository();


export const createAlarmUseCase = new CreateAlarmUseCase(pgsqlAlarmRepository);
export const createAlarmController = new CreateAlarmaController(createAlarmUseCase);

export const activateAlarmUseCase = new ActivateAlarmUseCase(pgsqlAlarmRepository);
export const activateAlarmController = new ActivateAlarmController(activateAlarmUseCase);

export const desactivateAlarmUseCase = new DesactivateAlarmUseCase(pgsqlAlarmRepository);
export const desactivateAlarmController = new DesactivateAlarmController(desactivateAlarmUseCase);