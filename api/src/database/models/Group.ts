import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface groupAttributes extends baseProps {
  name: string;
}
export interface GroupModel extends Model<groupAttributes>, groupAttributes {
  setCohort(cohortId: any);
}
export class Group extends Model<GroupModel, groupAttributes> {}

export type GroupStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GroupModel;
};

export function GroupFactory(sequelize: Sequelize) {
  return <GroupStatic>sequelize.define("group", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
}
