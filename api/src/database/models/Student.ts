import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface StudentAttributes {
  github: string;
}
export interface StudentModel
  extends Model<StudentAttributes>,
    StudentAttributes {}
export class Student extends Model<StudentModel, StudentAttributes> {}

export type StudentStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): StudentModel;
};

export function StudentFactory(sequelize: Sequelize) {
  return <StudentStatic>sequelize.define("student", {
    github: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
}
