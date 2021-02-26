import { Sequelize } from "sequelize-typescript";
import { Cohort } from './Cohort'
import { UserType } from './UserType'
import { Module } from './Module'
import { Admin } from './Admin'
import { Classes } from './Class'
import { Group } from './Group'
import { Instructor } from './Instructor'
import { PM } from './ProductoManagaer'
import { Student } from './Student'
import { User } from './User'

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henryapp`, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: false,
  models: [Cohort, UserType, Module, Admin, Classes, Group, Instructor, PM, Student, User]
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

export default sequelize;
