import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface StudentAttributes {
    id: number;
    github: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface StudentModel extends Model<StudentAttributes>, StudentAttributes { }
export class Student extends Model<StudentModel, StudentAttributes> { }

export type StudentStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): StudentModel;
};

export function StudentFactory(sequelize: Sequelize): StudentStatic {
    return <StudentStatic>sequelize.define("student", {
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
