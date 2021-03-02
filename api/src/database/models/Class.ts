import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface classAttributes {
    id: number;
    ordinal: number;
    name: string;
    startday: Date;
    githubrep: string;
    githubfeedback: string;
    githubquizzlink: string;
    videorecorder: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ClassModel extends Model<classAttributes>, classAttributes { }
export class Class extends Model<ClassModel, classAttributes> { }

export type ClassStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): ClassModel;
};

export function ClassFactory(sequelize: Sequelize) {
    return <ClassStatic>sequelize.define("class", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startday: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        githubrep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        githubfeedback: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        githubquizzlink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        videorecorder: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
}
