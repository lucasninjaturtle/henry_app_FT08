import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface adminAttributes extends baseProps {
  type: number;
}
export interface adminModel extends Model<adminAttributes>, adminAttributes {}
export class Admin extends Model<adminModel, adminAttributes> {}

export type AdminStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): adminModel;
};

export function AdminFactory(sequelize: Sequelize) {
  return <AdminStatic>sequelize.define("admin", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "student"
    }
  });
}
