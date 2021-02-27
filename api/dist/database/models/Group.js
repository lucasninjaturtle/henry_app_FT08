"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupFactory = exports.Group = void 0;
const sequelize_1 = require("sequelize");
class Group extends sequelize_1.Model {
}
exports.Group = Group;
function GroupFactory(sequelize) {
    return sequelize.define("group", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
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
exports.GroupFactory = GroupFactory;
