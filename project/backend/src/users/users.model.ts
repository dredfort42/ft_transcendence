import { BelongsToMany, Column, HasMany, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { Chat } from "../chat/chat.model";
import {Status} from "../status/status.model";
import {UserStatus} from "../status/user-status.model";




interface UserCreationAttrs {
    email: string;
    password: string;

}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Username', description: 'Уникальное имя пользователя'})
    @Column({ unique: true })
    username: string;

    @ApiProperty({example: '85865', description: 'Уникальный идентификатор в Интре'})
    @Column({type: DataTypes.INTEGER, unique: true})
    intraId: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataTypes.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataTypes.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column({type: DataTypes.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки'})
    @Column({type: DataTypes.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Status, () => UserStatus)
    status: Status[];

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Chat)
    posts: Chat[];

}
