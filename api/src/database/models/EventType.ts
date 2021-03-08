import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import baseProps from "./baseProps";

export interface eventTypeAttributes extends baseProps {
  name: string;
}
export interface eventTypeModel
  extends Model<eventTypeAttributes>,
  eventTypeAttributes {}
export class EventType extends Model<eventTypeModel, eventTypeAttributes> {}

export type EventTypeStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): eventTypeModel;
};

export function EventTypeFactory(sequelize: Sequelize) {
  return <EventTypeStatic>sequelize.define("eventType", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}
