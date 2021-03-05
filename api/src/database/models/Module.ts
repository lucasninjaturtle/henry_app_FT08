import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface moduleAttributes extends baseProps {
  ordinal: number;
  name: string;
  startday: Date;
  checkpointday: Date;
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
    startday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checkpointday: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
}
