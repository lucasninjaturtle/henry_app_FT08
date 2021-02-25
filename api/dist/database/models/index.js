"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const UserType_1 = require("./UserType");
const Module_1 = require("./Module");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new sequelize_typescript_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henryapp`, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true
    },
    logging: false,
    models: [User_1.User, UserType_1.UserType, Module_1.Modules]
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
});
sequelize.sync({ force: false });
exports.default = sequelize;
