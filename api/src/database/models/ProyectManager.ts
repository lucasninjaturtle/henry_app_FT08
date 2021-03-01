import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface proyectManagerAttributes {
    id: number;
    github: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface proyectManagerModel extends Model<proyectManagerAttributes>, proyectManagerAttributes {}
export class proyectManager extends Model<proyectManagerModel, proyectManagerAttributes> {}

export type ProyectManagerStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): proyectManagerModel;
};

export function ProyectManagerFactory (sequelize: Sequelize) {
    return <ProyectManagerStatic>sequelize.define("proyectmanager", {
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
