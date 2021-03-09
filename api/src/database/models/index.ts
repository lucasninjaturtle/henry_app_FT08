import { BelongsTo, Sequelize } from "sequelize";
require("dotenv").config();
import { UserFactory, UserStatic } from "./User";
import { StudentFactory, StudentStatic } from "./Student";
import { InstructorFactory, InstructorStatic } from "./Instructor";
import { ProjectManagerFactory, ProjectManagerStatic } from "./ProjectManager";
import { AdminFactory, AdminStatic } from "./Admin";
import { CohortFactory, CohortStatic } from "./Cohort";
import { ClassFactory, ClassStatic } from "./Class";
import { ModuleFactory, ModuleStatic } from "./Module";
import { GroupFactory, GroupStatic } from "./Group";
import { EventFactory, EventStatic } from "./Event";
import { EventTypeFactory, EventTypeStatic } from './EventType'

export interface DB {
  sequelize: Sequelize;
  User: UserStatic;
  Student: StudentStatic;
  Instructor: InstructorStatic;
  ProjectManager: ProjectManagerStatic;
  Admin: AdminStatic;
  Cohort: CohortStatic;
  Class: ClassStatic;
  Module: ModuleStatic;
  Group: GroupStatic;
  Event: EventStatic;
  EventType: EventTypeStatic;
}

// CONFIGURACION DB
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    port: Number(process.env.DB_PORT) || 5432,
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false,
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000
    }
  }
);

// RELACION LOS MODELOS CON SEQUELIZE
const User = UserFactory(sequelize);
const Student = StudentFactory(sequelize);
const Instructor = InstructorFactory(sequelize);
const ProjectManager = ProjectManagerFactory(sequelize);
const Admin = AdminFactory(sequelize);
const Cohort = CohortFactory(sequelize);
const Class = ClassFactory(sequelize);
const Module = ModuleFactory(sequelize);
const Group = GroupFactory(sequelize);
const Event = EventFactory(sequelize);
const EventType = EventTypeFactory(sequelize)

// RELACION ENTRE MODELOS
User.hasOne(Student);
Student.belongsTo(User);

User.hasOne(Instructor);
Instructor.belongsTo(User);

User.hasOne(ProjectManager);
ProjectManager.belongsTo(User);

User.hasOne(Admin);
Admin.belongsTo(User);

Instructor.hasMany(Cohort);
Cohort.belongsTo(Instructor);

Group.hasMany(ProjectManager);
ProjectManager.belongsTo(Group);

Group.hasMany(Student);
Student.belongsTo(Group);

Cohort.hasMany(Group);
Group.belongsTo(Cohort);

Cohort.hasMany(Module);
Module.belongsTo(Cohort);

Cohort.hasMany(Student);
Student.belongsTo(Cohort);

Module.hasMany(Class);
Class.belongsTo(Module);

Event.belongsTo(EventType);

export const db: DB = {
  sequelize,
  User,
  Student,
  Instructor,
  ProjectManager,
  Admin,
  Cohort,
  Class,
  Module,
  Group,
  Event,
  EventType
};
