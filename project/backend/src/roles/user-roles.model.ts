import { BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Role } from "./roles.model";


@Table({tableName: `user_roles`, createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

  @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Role)
  @Column({type: DataTypes.INTEGER })
  roleId: number;

  @ForeignKey(() => User)
  @Column({type: DataTypes.INTEGER })
  userId: number;

}
