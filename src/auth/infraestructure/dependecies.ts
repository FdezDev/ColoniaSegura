import { AuthController } from './controller/authController';
import { AuthUseCase } from '../application/authUseCase';
import { PgsqlAuthRepository } from './pgsqlAuthRepository';

export const authRepository = new PgsqlAuthRepository();
export const authUseCase = new AuthUseCase(authRepository);
export const authController = new AuthController(authUseCase);