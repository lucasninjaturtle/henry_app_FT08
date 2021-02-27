import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface instructorAttributes {
    id: number;
    github: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface InstructorModel extends Model<instructorAttributes>, instructorAttributes {}
export class Instructor extends Model<InstructorModel, instructorAttributes> {}

export type InstructorStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): InstructorModel;
};

export function InstructorFactory (sequelize: Sequelize) {
    return <InstructorStatic>sequelize.define("instructor", {
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
