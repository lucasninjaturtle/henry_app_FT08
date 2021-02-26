"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const UserType_1 = require("./UserType");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER
    })
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    })
], User.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    })
], User.prototype, "lastname", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    })
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    })
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    sequelize_typescript_1.ForeignKey(() => UserType_1.UserType)
], User.prototype, "UserTypeId", void 0);
User = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {
            attributes: { exclude: ["deletedAt"] }
        },
        paranoid: false,
        tableName: "User"
    })
], User);
exports.User = User;
