import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface cohortAttributes {
    id: number;
    name: string;
    startDay: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface cohortModel extends Model<cohortAttributes>, cohortAttributes {}
export class Cohort extends Model<cohortModel, cohortAttributes> {}

export type CohortStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): cohortModel;
};

export function CohortFactory (sequelize: Sequelize) {
    return <CohortStatic>sequelize.define("cohort", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDay: {
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
