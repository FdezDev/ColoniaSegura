import { generateToken } from '../utils/jwt';
import { AuthRepository } from '../domain/authRepository';

type AuthResponse = { 
    status: 'success' | 'error', 
    token?: string,
    userId?: number, // Añadimos el ID del usuario
    group?: number,
    alarm?: number
    message?: string 
};

export class AuthUseCase {
    constructor(private authRepository: AuthRepository) {}

    async run(email: string, password: string): Promise<AuthResponse> {
        const user = await this.authRepository.verifyUser(email, password);
        if (user) {
            const token = generateToken({ email: user.email, userId: user.id , group: user.groupId, alarm: user.alarmId});
            return {
                status: 'success',
                token,
                userId: user.id,  // Devolvemos el ID del usuario
                group: user.groupId,
                alarm: user.alarmId
            };
        } else {
            return {
                status: 'error',
                message: 'Credenciales inválidas'
            };
        }
    }
}