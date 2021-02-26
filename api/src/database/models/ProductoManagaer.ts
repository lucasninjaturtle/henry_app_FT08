import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Group } from './Group'
import { User } from './User'

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: false,
  tableName: "PM"
})

export class PM extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  Github!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  @ForeignKey(() => User)
  UserId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  @ForeignKey(() => Group)
  GroupId!: string;
}