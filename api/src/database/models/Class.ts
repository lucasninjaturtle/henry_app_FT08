import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface classAttributes extends baseProps {
  ordinal: number;
  name: string;
  startDay: Date;
  githubRep: string;
  githubFeedback: string;
  githubQuizLink: string;
  recordedVideoURL: string;
}
export interface ClassModel extends Model<classAttributes>, classAttributes {}
export class Class extends Model<ClassModel, classAttributes> {}

export type ClassStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ClassModel;
};

export function ClassFactory(sequelize: Sequelize) {
  return <ClassStatic>sequelize.define("class", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDay: {
      type: DataTypes.DATE,
      allowNull: false
    },
    githubRep: {
      type: DataTypes.STRING,
      allowNull: false
    },
    githubFeedback: {
      type: DataTypes.STRING,
      allowNull: false
    },
    githubQuizLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recordedVideoURL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
