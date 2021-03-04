import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface adminAttributes {}
export interface adminModel extends Model<adminAttributes>, adminAttributes {}
export class Admin extends Model<adminModel, adminAttributes> {}

export type AdminStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): adminModel;
};

export function AdminFactory(sequelize: Sequelize) {
  return <AdminStatic>sequelize.define("admin", {});
}
