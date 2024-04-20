export class Auth {
    constructor(
        public email: string, 
        public password: string, 
        public id: number,
        public groupId?: number,
        public alarmId?: number
    ) {}
}