"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassFactory = exports.Class = void 0;
const sequelize_1 = require("sequelize");
class Class extends sequelize_1.Model {
}
exports.Class = Class;
function ClassFactory(sequelize) {
    return sequelize.define("class", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        githubrep: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        githubfeedback: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        githubquizzlink: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        videorecorder: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
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
exports.ClassFactory = ClassFactory;
