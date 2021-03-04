import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface instructorAttributes extends baseProps {
  github: string;
}
export interface InstructorModel
  extends Model<instructorAttributes>,
    instructorAttributes {}
export class Instructor extends Model<InstructorModel, instructorAttributes> {}

export type InstructorStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): InstructorModel;
};

export function InstructorFactory(sequelize: Sequelize) {
  return <InstructorStatic>sequelize.define("instructor", {
    github: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
}
