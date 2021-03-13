import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface moduleAttributes extends baseProps {
  name: string;
  startDay: Date;
  checkpointDay: Date;
}
export interface ModuleModel
  extends Model<moduleAttributes>,
    moduleAttributes {}
export class Module extends Model<ModuleModel, moduleAttributes> {}

export type ModuleStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ModuleModel;
};

export function ModuleFactory(sequelize: Sequelize) {
  return <ModuleStatic>sequelize.define("module", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDay: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checkpointDay: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
}
