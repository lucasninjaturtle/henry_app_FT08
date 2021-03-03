"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorFactory = exports.Instructor = void 0;
const sequelize_1 = require("sequelize");
class Instructor extends sequelize_1.Model {
}
exports.Instructor = Instructor;
function InstructorFactory(sequelize) {
    return sequelize.define("instructor", {
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
exports.InstructorFactory = InstructorFactory;
