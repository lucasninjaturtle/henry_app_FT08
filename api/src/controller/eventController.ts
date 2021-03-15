import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";

export const eventController = {
  async createEvent(req: Request, res: Response) {
    const {
      name,
      startDay,
      link,
      description,
      eventTypeId,
      startTime,
      endTime,
    } = req.body as {
      [key: string]: string;
    };

    db.Event.create({
      name,
      startDay,
      link,
      description,
      startTime,
      endTime,
    }).then(async (event) => {
      if (eventTypeId) await event.setEventType(+eventTypeId);
      res.sendStatus(200);
    });
  },
  async getEvent(req: Request, res: Response) {
    const eventId = req.params.id;
    db.Event.findByPk(eventId).then((response) =>
      res.status(200).json(response)
    );
  },
  async getEvents(req: Request, res: Response) {
    db.Event.findAll().then((response) => res.status(200).json(response));
  },
  async deleteEvent(req: Request, res: Response) {
    const eventId = req.params.id;
    db.Event.destroy({
      where: {
        id: eventId,
      },
    }).then(() => res.sendStatus(200));
  },
  async putEvent(req: Request, res: Response) {
    const eventId = req.params.id;
    const eventData = req.body;
    db.Event.update(
      {
        name: eventData.name,
        startDay: eventData.startDay,
        link: eventData.link,
        description: eventData.description,
        startTime: eventData.startTime,
        endTime: eventData.endTime,
        eventTypeId: eventData.eventTypeId,
      },
      {
        where: {
          id: eventId,
        },
      }
    ).then(() => res.sendStatus(200));
  },
  async searchEventsByName(req: Request, res: Response) {
    const { name, limit = 5 } = req.query;
    const events = await db.Event.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      limit: +limit,
    });
    res.json(events);
  },
};
