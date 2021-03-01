import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface productoManagerAttributes {
    id: number;
    github: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface productoManagerModel extends Model<productoManagerAttributes>, productoManagerAttributes {}
export class productManager extends Model<productoManagerModel, productoManagerAttributes> {}

export type ProductoManagerStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): productoManagerModel;
};

export function ProductManagerFactory (sequelize: Sequelize) {
    return <ProductoManagerStatic>sequelize.define("productomanager", {
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
