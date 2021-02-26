import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: false,
  tableName: "Cohort"
})

export class Cohort extends Model {
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
  Name!: string;

  @Column({
    allowNull: false,
    type: DataType.DATE
  })
  StartDay!: string;

  /* FK */
  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  InstructorId!: string;

  /* FK */
  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  ModuleId!: string;
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
