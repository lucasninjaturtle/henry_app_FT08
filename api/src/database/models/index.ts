import { Sequelize } from "sequelize";
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
import { UserFactory, UserStatic } from "./users";
import { StudentFactory, StudentStatic } from "./students"
import { InstructorFactory, InstructorStatic } from "./instructor"
import { ProductManagerFactory, ProductoManagerStatic } from "./productmanager"
import { AdminFactory, AdminStatic } from "./admin"
import { CohortFactory, CohortStatic } from "./cohort"
import { ClassFactory, ClassStatic } from "./class"
import { ModuleFactory, ModuleStatic } from "./module"
import { GroupFactory, GroupStatic } from "./group"

export interface DB {
    sequelize: Sequelize;
    User: UserStatic;
    Student: StudentStatic;
    Instructor: InstructorStatic;
    ProductManager: ProductoManagerStatic;
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
const ProductManager = ProductManagerFactory(sequelize);
const Admin = AdminFactory(sequelize);
const Cohort = CohortFactory(sequelize);
const Class = ClassFactory(sequelize);
const Module = ModuleFactory(sequelize);
const Group = GroupFactory(sequelize);

// RELACION ENTRE MODELOS
Cohort.belongsTo(Instructor);
Instructor.hasOne(Cohort);
Cohort.hasMany(Student);
Student.belongsTo(Cohort)
Group.hasMany(Student);
Student.belongsTo(Group)
Group.belongsTo(ProductManager)
ProductManager.hasOne(Group)
Group.hasOne(Cohort)
Module.hasOne(Cohort)
Class.belongsTo(Module)
User.hasMany(Instructor)
User.hasMany(Student)
User.hasMany(ProductManager)
User.hasMany(Admin)

export const db: DB = {
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
