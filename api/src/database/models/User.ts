import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";
import { StudentModel } from "./Student";

export interface UserAttributes extends baseProps {
  name: string;
  lastName: string;
  email: string;
  cellphone: string;
  password?: string;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}
export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel & {
    setStudent: (student: StudentModel) => PromiseLike<void>;
  };
};

export function UserFactory(sequelize: Sequelize) {
  return <UserStatic>sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
}
