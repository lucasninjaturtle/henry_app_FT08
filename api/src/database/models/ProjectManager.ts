import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface projectManagerAttributes extends baseProps {
  github: string;
}
export interface projectManagerModel
  extends Model<projectManagerAttributes>,
    projectManagerAttributes {}
export class projectManager extends Model<
  projectManagerModel,
  projectManagerAttributes
> {}

export type ProjectManagerStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): projectManagerModel;
};

export function ProjectManagerFactory(sequelize: Sequelize) {
  return <ProjectManagerStatic>sequelize.define("projectmanager", {
    github: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
}
