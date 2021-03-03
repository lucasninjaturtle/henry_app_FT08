"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminFactory = exports.Admin = void 0;
const sequelize_1 = require("sequelize");
class Admin extends sequelize_1.Model {
}
exports.Admin = Admin;
function AdminFactory(sequelize) {
    return sequelize.define("admin", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
exports.AdminFactory = AdminFactory;
