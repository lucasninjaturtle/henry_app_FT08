"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleFactory = exports.Module = void 0;
const sequelize_1 = require("sequelize");
class Module extends sequelize_1.Model {
}
exports.Module = Module;
function ModuleFactory(sequelize) {
    return sequelize.define("module", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        startday: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        checkpointday: {
            type: sequelize_1.DataTypes.DATE,
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
exports.ModuleFactory = ModuleFactory;
