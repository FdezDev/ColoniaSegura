import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import GroupModel from '../../../group/infraestructure/models/groupModel';

@Table({
    tableName: 'users',
    timestamps: true
})
class UserModel extends Model<UserModel> {
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

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public last_name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public phone!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public password!: string;


    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public email!: string;

    @ForeignKey(() => GroupModel)
    
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    public groupId?: number;

    @BelongsTo(() => GroupModel)
    public group!: GroupModel;
}

export default UserModel;