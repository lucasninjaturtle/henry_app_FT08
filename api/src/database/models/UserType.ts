import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: false,
  tableName: "UserTypes"
})

export class UserType extends Model {
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
  UserTypes!: string;
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
