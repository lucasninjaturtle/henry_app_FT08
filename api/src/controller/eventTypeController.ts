import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";

export const eventTypeController = {
  async createEventType(req: Request, res: Response) {
    const eventTypeData = req.body;
    console.log(eventTypeData);
    db.EventType.create({
      name: eventTypeData.name
    }).then(() => {
      res.sendStatus(200);
    });
  },
  async getEventType(req: Request, res: Response) {
    const eventTypeId = req.params.id;
    db.EventType.findByPk(eventTypeId).then((response) => {
      res.status(200).json(response);
    });
  },
  async getEventsType(req: Request, res: Response) {
    db.EventType.findAll().then((response) => {
      /* res.status(200).json(response) */
      console.log(response);
    });
  },
  async deleteEventType(req: Request, res: Response) {
    const eventTypeId = req.params.id;
    db.EventType.destroy({
      where: {
        id: eventTypeId
      }
    }).then(() => {
      console.log("El tipo de evento ha sido eliminado");
    });
  },
  async putEventType(req: Request, res: Response) {
    const eventTypeId = req.params.id;
    const eventTypeData = req.body;
    db.EventType.update(
      {
        name: eventTypeData.name
      },
      {
        where: {
          id: eventTypeId
        }
      }
    ).then(() => {
      console.log("Se edito el tipo de evento correctamente");
    });
  },

  async searchEventTypeByName(req: Request, res: Response) {
    const { name, limit = 5 } = req.query;

    if (!name || isNaN(+limit)) return res.sendStatus(400);

    db.EventType.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` }
      },
      limit: +limit,
      order: [["name", "DESC"]]
    }).then((eventsData) => res.json(eventsData));
  }
};
