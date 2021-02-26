"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PM = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Group_1 = require("./Group");
const User_1 = require("./User");
let PM = class PM extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER
    })
], PM.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    })
], PM.prototype, "Github", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    sequelize_typescript_1.ForeignKey(() => User_1.User)
], PM.prototype, "UserId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    sequelize_typescript_1.ForeignKey(() => Group_1.Group)
], PM.prototype, "GroupId", void 0);
PM = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {
            attributes: { exclude: ["deletedAt"] }
        },
        paranoid: false,
        tableName: "PM"
    })
], PM);
exports.PM = PM;
