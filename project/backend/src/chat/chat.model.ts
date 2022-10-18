import { BelongsTo, BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { User } from "../users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;

}

@Table({tableName: 'chat'})
export class Chat extends Model<Chat, PostCreationAttrs> {

    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataTypes.STRING, unique: true, allowNull: false })
    title: string;

    @Column({type: DataTypes.STRING, allowNull: false })
    content: string;

     @ForeignKey(() => User)
    @Column({type: DataTypes.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User
}
