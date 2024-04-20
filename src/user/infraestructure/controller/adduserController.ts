import { Request, Response } from "express";
import { AddUserUseCase } from "../../application/addUserUseCase";
import bcrypt from 'bcrypt';

export class AddUserController {
    constructor(readonly addUserUseCase: AddUserUseCase) {}
    async run(req: Request, res: Response){

        try {
            let { name, last_name, phone, password, email, groupId} = req.body;
            const saltRounds = 10;
            password = await bcrypt.hash(password, saltRounds);

            let createdUser = await this.addUserUseCase.run(name, last_name, phone, password, email, groupId);
            if (createdUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        name: createdUser.name,
                        last_name: createdUser.last_name,
                        phone: createdUser.phone,
                        password: createdUser.password,
                        email: createdUser.email,
                        groupId: createdUser.groupId
                    },
                    Message: "usuarios Hasido Creado Con Exito"
                });

            }

            res.status(400).send({
                status: "Error",
                data: [],
                validations: [],
                Message: "Error al crear Usuario"
            });
        } catch (error) {
            console.error("Error In AdduserController", error);
            res.status(500).send({
                status: "error",
                Message: "Error Internos al Server"
            });
        }
    }
    

}