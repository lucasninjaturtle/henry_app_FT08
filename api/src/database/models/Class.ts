import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Module } from "./Module";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: false,
  tableName: "Classes"
})

export class Classes extends Model {
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
    type: DataType.DATE
  })
  Name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  GithubRep!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  GithubFeedBack!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  GithubQuizzLink!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  VideoRecorder!: string;

  //FK
  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  @ForeignKey(() => Module)
  ModuleId!: string;
}
