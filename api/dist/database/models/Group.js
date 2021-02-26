"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Group = class Group extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER
    })
], Group.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    })
], Group.prototype, "name", void 0);
Group = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {
            attributes: { exclude: ["deletedAt"] }
        },
        paranoid: false,
        tableName: "Group"
    })
], Group);
exports.Group = Group;
