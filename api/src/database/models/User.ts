import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: false,
  tableName: "Users"
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
    type: DataType.INTEGER
  })
  cellphone!: Number;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  github!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  module!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  cohort!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  userType!: string;
}

// export class Restaurant extends Model {
//   @Column({
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataType.INTEGER.UNSIGNED
//   })
//   id!: string;

//   @Column({
//     allowNull: false,
//     type: DataType.INTEGER.UNSIGNED
//   })
//   @ForeignKey(() => Chef)
//   chefId!: string;

//   @Column({
//     allowNull: false,
//     type: DataType.STRING
//   })
//   name!: string;

//   @BelongsTo(() => Chef)
//   chef!: Chef;
// }
