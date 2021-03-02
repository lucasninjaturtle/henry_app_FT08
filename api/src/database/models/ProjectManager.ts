import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface projectManagerAttributes {
    id: number;
    github: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface projectManagerModel extends Model<projectManagerAttributes>, projectManagerAttributes {}
export class projectManager extends Model<projectManagerModel, projectManagerAttributes> {}

export type ProjectManagerStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): projectManagerModel;
};

export function ProjectManagerFactory (sequelize: Sequelize) {
    return <ProjectManagerStatic>sequelize.define("projectmanager", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
