import { Auth } from "./auth";

export interface AuthRepository {
    verifyUser(phone: string, password: string): Promise<Auth | null>;
}