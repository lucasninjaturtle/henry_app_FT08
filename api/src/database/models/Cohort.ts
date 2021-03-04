import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface cohortAttributes {
  name: string;
  startDay: Date;
}
export interface cohortModel
  extends Model<cohortAttributes>,
    cohortAttributes {}
export class Cohort extends Model<cohortModel, cohortAttributes> {}

export type CohortStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): cohortModel;
};

export function CohortFactory(sequelize: Sequelize) {
  return <CohortStatic>sequelize.define("cohort", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDay: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
}
