export class Chat{
    constructor(
        readonly id: number,
        readonly content_msg: string,
        readonly name_group: string,
        readonly name_user: string
    ){}
}