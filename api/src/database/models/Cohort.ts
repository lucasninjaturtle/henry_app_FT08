import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface cohortAttributes extends baseProps {
  name: string;
  startDay: string;
}
export interface cohortModel
  extends Model<cohortAttributes>,
    cohortAttributes {
  setInstructor(instructorId: any);
}
export class Cohort extends Model<cohortModel, cohortAttributes> {}

export type CohortStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): cohortModel;
};

export function CohortFactory(sequelize: Sequelize) {
  return <CohortStatic>sequelize.define("cohort", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    startDay: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
}
