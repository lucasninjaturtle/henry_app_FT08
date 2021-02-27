import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface adminAttributes {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface adminModel extends Model<adminAttributes>, adminAttributes {}
export class Admin extends Model<adminModel, adminAttributes> {}

export type AdminStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): adminModel;
};

export function AdminFactory (sequelize: Sequelize) {
    return <AdminStatic>sequelize.define("admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
