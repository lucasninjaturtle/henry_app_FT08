"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Cohort_1 = require("./Cohort");
const UserType_1 = require("./UserType");
const Module_1 = require("./Module");
const Admin_1 = require("./Admin");
const Class_1 = require("./Class");
const Group_1 = require("./Group");
const Instructor_1 = require("./Instructor");
const ProductoManagaer_1 = require("./ProductoManagaer");
const Student_1 = require("./Student");
const User_1 = require("./User");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new sequelize_typescript_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henryapp`, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true
    },
    logging: false,
    models: [Cohort_1.Cohort, UserType_1.UserType, Module_1.Module, Admin_1.Admin, Class_1.Classes, Group_1.Group, Instructor_1.Instructor, ProductoManagaer_1.PM, Student_1.Student, User_1.User]
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
});
sequelize.sync({ force: true });
exports.default = sequelize;
