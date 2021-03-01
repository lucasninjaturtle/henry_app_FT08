import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface groupAttributes {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface GroupModel extends Model<groupAttributes>, groupAttributes {}
export class Group extends Model<GroupModel, groupAttributes> {}

export type GroupStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): GroupModel;
};

export function GroupFactory (sequelize: Sequelize) {
    return <GroupStatic>sequelize.define("group", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
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
