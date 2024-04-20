import express from 'express';
import { authController } from './dependecies';


const authRouter = express.Router();

authRouter.post('/', authController.run.bind(authController));

export { authRouter };