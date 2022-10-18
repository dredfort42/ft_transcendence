import { BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";

import {Status} from "./status.model";


@Table({tableName: `user_status`, createdAt: false, updatedAt: false})
export class UserStatus extends Model<UserStatus> {

  @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Status)
  @Column({type: DataTypes.INTEGER })
  statusId: number;

  @ForeignKey(() => User)
  @Column({type: DataTypes.INTEGER })
  userId: number;

}
