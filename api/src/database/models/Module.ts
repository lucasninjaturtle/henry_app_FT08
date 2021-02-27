import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface moduleAttributes {
    id: number;
    ordinal: number;
    name: string;
    startday: Date;
    checkpointday: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ModuleModel extends Model<moduleAttributes>, moduleAttributes {}
export class Module extends Model<ModuleModel, moduleAttributes> {}

export type ModuleStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ModuleModel;
};

export function ModuleFactory (sequelize: Sequelize) {
    return <ModuleStatic>sequelize.define("module", {
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
        checkpointday: {
            type: DataTypes.DATE,
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
