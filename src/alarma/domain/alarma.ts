export class Alarma{
    constructor(
        readonly id: number,
        readonly name: string,
        readonly phone: number,
        readonly isActive: boolean,
        readonly groupId?: number
    ){}
}