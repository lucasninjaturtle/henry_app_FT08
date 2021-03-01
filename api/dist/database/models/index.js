"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const Users_1 = require("./Users");
const Students_1 = require("./Students");
const Instructor_1 = require("./Instructor");
const ProyectManager_1 = require("./ProyectManager");
const Admin_1 = require("./Admin");
const Cohort_1 = require("./Cohort");
const Class_1 = require("./Class");
const Module_1 = require("./Module");
const Group_1 = require("./Group");
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
const User = Users_1.UserFactory(sequelize);
const Student = Students_1.StudentFactory(sequelize);
const Instructor = Instructor_1.InstructorFactory(sequelize);
const ProyectManager = ProyectManager_1.ProyectManagerFactory(sequelize);
const Admin = Admin_1.AdminFactory(sequelize);
const Cohort = Cohort_1.CohortFactory(sequelize);
const Class = Class_1.ClassFactory(sequelize);
const Module = Module_1.ModuleFactory(sequelize);
const Group = Group_1.GroupFactory(sequelize);
// RELACION ENTRE MODELOS
User.hasOne(Student);
Student.belongsTo(User);
User.hasOne(Instructor);
Instructor.belongsTo(User);
User.hasOne(ProyectManager);
ProyectManager.belongsTo(User);
User.hasOne(Admin);
Admin.belongsTo(User);
Cohort.belongsTo(Instructor);
Instructor.hasMany(Cohort);
Group.hasMany(ProyectManager);
ProyectManager.belongsTo(Group);
Student.belongsTo(Group);
Group.hasMany(Student);
Group.belongsTo(Cohort);
Cohort.hasMany(Group);
Module.belongsTo(Cohort);
Cohort.hasMany(Module);
Student.belongsTo(Cohort);
Cohort.hasMany(Student);
Student.belongsTo(Group);
Class.belongsTo(Module);
Module.hasMany(Class);
exports.db = {
    sequelize,
    User,
    Student,
    Instructor,
    ProyectManager,
    Admin,
    Cohort,
    Class,
    Module,
    Group
};
