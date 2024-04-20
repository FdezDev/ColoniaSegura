import { Request, Response } from "express";
import { CreateGroupUseCase } from "../../application/createGroupUseCase";

export class CreateGroupController{
    constructor(readonly createGroupUseCase: CreateGroupUseCase){}
    async run (req : Request, res : Response){
        try {
            let {name} = req.body;
            let CreateGroup = await this.createGroupUseCase.run(name);

            if (CreateGroup) {
                return res.status(201).send({
                    status: "success",
                    data:{
                        name: CreateGroup.name
                    },
                    Message: "Grupo creado con exito"
                });
                
            }

            res.status(400).send({
                status: "Error",
                data: [],
                validations: [],
                Message: "Error al crear grupo"
            });
        } catch (error) {
            console.error("Error In CreateGroupController", error);
            res.status(500).send({
                status: "error",
                Message: "Error Internos al Server"
            });
        }
    }
}