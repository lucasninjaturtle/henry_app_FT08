"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CohortFactory = exports.Cohort = void 0;
const sequelize_1 = require("sequelize");
class Cohort extends sequelize_1.Model {
}
exports.Cohort = Cohort;
function CohortFactory(sequelize) {
    return sequelize.define("cohort", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        startDay: {
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
exports.CohortFactory = CohortFactory;
