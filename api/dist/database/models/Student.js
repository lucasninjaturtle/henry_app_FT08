"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFactory = exports.Student = void 0;
const sequelize_1 = require("sequelize");
class Student extends sequelize_1.Model {
}
exports.Student = Student;
function StudentFactory(sequelize) {
    return sequelize.define("student", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        github: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    });
}
exports.StudentFactory = StudentFactory;
