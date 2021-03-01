import { Sequelize } from "sequelize";
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
import { UserFactory, UserStatic } from "./Users";
import { StudentFactory, StudentStatic } from "./Students"
import { InstructorFactory, InstructorStatic } from "./Instructor"
import { ProyectManagerFactory, ProyectManagerStatic } from "./ProyectManager"
import { AdminFactory, AdminStatic } from "./Admin"
import { CohortFactory, CohortStatic } from "./Cohort"
import { ClassFactory, ClassStatic } from "./Class"
import { ModuleFactory, ModuleStatic } from "./Module"
import { GroupFactory, GroupStatic } from "./Group"

export interface DB {
    sequelize: Sequelize;
    User: UserStatic;
    Student: StudentStatic;
    Instructor: InstructorStatic;
    ProyectManager: ProyectManagerStatic;
    Admin: AdminStatic;
    Cohort: CohortStatic;
    Class: ClassStatic;
    Module: ModuleStatic;
    Group: GroupStatic;
}

// CONFIGURACION DB
const sequelize = new Sequelize(
    (process.env.DB_NAME),
    (process.env.DB_USER),
    (process.env.DB_PASSWORD),
    {
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
    }
);

// RELACION LOS MODELOS CON SEQUELIZE
const User = UserFactory(sequelize);
const Student = StudentFactory(sequelize);
const Instructor = InstructorFactory(sequelize);
const ProyectManager = ProyectManagerFactory(sequelize);
const Admin = AdminFactory(sequelize);
const Cohort = CohortFactory(sequelize);
const Class = ClassFactory(sequelize);
const Module = ModuleFactory(sequelize);
const Group = GroupFactory(sequelize);

// RELACION ENTRE MODELOS
User.hasOne(Student)
Student.belongsTo(User)

User.hasOne(Instructor)
Instructor.belongsTo(User)

User.hasOne(ProyectManager)
ProyectManager.belongsTo(User)

User.hasOne(Admin)
Admin.belongsTo(User)

Cohort.belongsTo(Instructor)
Instructor.hasMany(Cohort)

Group.hasMany(ProyectManager)
ProyectManager.belongsTo(Group)

Student.belongsTo(Group)
Group.hasMany(Student)

Group.belongsTo(Cohort)
Cohort.hasMany(Group)

Module.belongsTo(Cohort)
Cohort.hasMany(Module)

Student.belongsTo(Cohort)
Cohort.hasMany(Student)

Student.belongsTo(Group)
Class.belongsTo(Module)
Module.hasMany(Class)

export const db: DB = {
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
