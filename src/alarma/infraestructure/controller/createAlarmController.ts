import { Request, Response } from "express";
import { CreateAlarmUseCase } from "../../application/createAlarmUseCase";

export class CreateAlarmaController{
    constructor (readonly createAlarmUseCase: CreateAlarmUseCase){}
    async run (req: Request, res: Response){
        try {
            let {name, phone, isActive, groupId}= req.body;
            let createAlarm = await this.createAlarmUseCase.run(name, phone, isActive, groupId);
            if (createAlarm) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        name: createAlarm.name,
                        phone: createAlarm.phone,
                        isActive: createAlarm.isActive,
                        groupId: createAlarm.groupId,
                    },
                    Message: "Alarma Hasido Creado Con Exito"
                });

            }

            res.status(400).send({
                status: "Error",
                data: [],
                validations: [],
                Message: "Error al crear Alarma"
            });
        } catch (error) {
            console.error("Error In CreateAlarmController", error);
            res.status(500).send({
                status: "error",
                Message: "Error Internos al Server"
            });
        }
    }
}