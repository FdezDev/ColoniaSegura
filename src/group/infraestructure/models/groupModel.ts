import { Model, DataType, Table, Column, HasMany, HasOne  } from 'sequelize-typescript';
import UserModel from '../../../user/infraestructure/models/userModel';
import AlarmModel from '../../../alarma/infraestructure/models/alarmModel';

@Table({
    tableName: 'groups',
    timestamps: true
})
class GroupModel extends Model<GroupModel> {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    public id!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public name!: string;

    @HasMany(() => UserModel)
    public users!: UserModel[];

    @HasOne(() => AlarmModel)
    public alarm!: AlarmModel;
}

export default GroupModel;
