"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const users_1 = require("./users");
const students_1 = require("./students");
const instructor_1 = require("./instructor");
const productmanager_1 = require("./productmanager");
const admin_1 = require("./admin");
const cohort_1 = require("./cohort");
const class_1 = require("./class");
const module_1 = require("./module");
const group_1 = require("./group");
// CONFIGURACION DB
const sequelize = new sequelize_1.Sequelize((process.env.DB_NAME), (process.env.DB_USER), (process.env.DB_PASSWORD), {
    port: Number(process.env.DB_PORT) || 5432,
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false,
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000,
    },
});
// RELACION LOS MODELOS CON SEQUELIZE
const User = users_1.UserFactory(sequelize);
const Student = students_1.StudentFactory(sequelize);
const Instructor = instructor_1.InstructorFactory(sequelize);
const ProductManager = productmanager_1.ProductManagerFactory(sequelize);
const Admin = admin_1.AdminFactory(sequelize);
const Cohort = cohort_1.CohortFactory(sequelize);
const Class = class_1.ClassFactory(sequelize);
const Module = module_1.ModuleFactory(sequelize);
const Group = group_1.GroupFactory(sequelize);
// RELACION ENTRE MODELOS
Cohort.belongsTo(Instructor);
Instructor.hasOne(Cohort);
Cohort.hasMany(Student);
Student.belongsTo(Cohort);
Group.hasMany(Student);
Student.belongsTo(Group);
Group.belongsTo(ProductManager);
ProductManager.hasOne(Group);
Group.hasOne(Cohort);
Module.hasOne(Cohort);
Class.belongsTo(Module);
User.hasMany(Instructor);
User.hasMany(Student);
User.hasMany(ProductManager);
User.hasMany(Admin);
exports.db = {
    sequelize,
    User,
    Student,
    Instructor,
    ProductManager,
    Admin,
    Cohort,
    Class,
    Module,
    Group
};
