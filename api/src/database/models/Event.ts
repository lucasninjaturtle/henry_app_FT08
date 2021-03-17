import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface eventAttributes extends baseProps {
  name: string;
  startDay: string;
  link: string;
  description: string;
  startTime: string;
  endTime: string;
}
export interface eventModel extends Model<eventAttributes>, eventAttributes {}
export class Event extends Model<eventModel, eventAttributes> {}

export type EventStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): eventModel;
};

export function EventFactory(sequelize: Sequelize) {
  return <EventStatic>sequelize.define("event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDay: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
}
