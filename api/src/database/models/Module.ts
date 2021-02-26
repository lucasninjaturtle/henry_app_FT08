import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Classes } from './Class'

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: false,
  tableName: "Module"
})

export class Module extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  Ordinal!: number;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  Name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  StartDate!: string;
}