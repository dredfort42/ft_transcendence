import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string;

}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное Значение роли'})
    @Column({type: DataTypes.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type: DataTypes.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}
