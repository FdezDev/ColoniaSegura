export class User{
    constructor(
        readonly id: number,
        readonly name: string,
        readonly last_name: string,
        readonly phone: string,
        readonly password: string,
        readonly email: string,
        readonly groupId?: number
        
    ){}
}