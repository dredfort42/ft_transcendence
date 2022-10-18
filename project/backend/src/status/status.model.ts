import {BelongsToMany, Column, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {DataTypes} from "sequelize";

interface StatusCreationAttrs {
  statusName: string;
  password: string;

}

@Table({tableName: 'status'})
export class Status extends Model<Status, StatusCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Online', description: 'Уникальное название статуса'})
  @Column({ unique: true })
  statusName: string;

  @ApiProperty({example: 'Онлайн', description: 'Описание статуса'})
  @Column({type: DataTypes.STRING, allowNull: false })
  description: string;

}
