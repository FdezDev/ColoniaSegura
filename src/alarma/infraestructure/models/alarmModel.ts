import { Model, DataType, Table, Column, ForeignKey } from 'sequelize-typescript';
import GroupModel from '../../../group/infraestructure/models/groupModel';

@Table({
    tableName: 'alarms',
    timestamps: true
})
class AlarmModel extends Model<AlarmModel> {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    public id!: number;

    @ForeignKey(() => GroupModel)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: true
    })
    public groupId?: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public name!: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    public phone!: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false
    })
    public isActive!: boolean;
}

export default AlarmModel;