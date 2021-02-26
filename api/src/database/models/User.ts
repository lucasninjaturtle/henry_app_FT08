import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { UserType } from './UserType'

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: false,
  tableName: "User"
})

export class User extends Model {
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
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  lastname!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  email!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  password!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  @ForeignKey(() => UserType)
  UserTypeId!: number;
}