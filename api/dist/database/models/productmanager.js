"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagerFactory = exports.productManager = void 0;
const sequelize_1 = require("sequelize");
class productManager extends sequelize_1.Model {
}
exports.productManager = productManager;
function ProductManagerFactory(sequelize) {
    return sequelize.define("productomanager", {
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
exports.ProductManagerFactory = ProductManagerFactory;
