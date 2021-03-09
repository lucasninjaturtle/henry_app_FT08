import { Request, Response } from "express";
import { db } from "../database/models";

export const eventController = {
  async createEvent(req: Request, res: Response) {
      const eventData = req.body;
      db.Event.create({
          name: eventData.name,
          startDay: eventData.startDay,
          link: eventData.link,
          description: eventData.description,
          eventTypeId: eventData.eventTypeId
      })
        .then(() => {
            console.log("Se creo el evento correctamente")
        })
  },
  async getEvent(req: Request, res: Response) {
    const eventId = req.params.id
    db.Event.findByPk(eventId)
        .then((response) => {
            res.status(200).json(response)
        })
  },
  async getEvents(req: Request, res: Response) {
    db.Event.findAll()
        .then((response) => {
            res.status(200).json(response)
        })
  },
  async deleteEvent(req: Request, res: Response) {
    const eventId = req.params.id
    db.Event.destroy({
        where: {
            id: eventId
        }
    })
        .then(() => {
            console.log("El evento ha sido eliminado")
        })
  },
  async putEvent(req: Request, res: Response) {
    const eventId = req.params.id
    const eventData = req.body;
      db.Event.update({
          name: eventData.name,
          startDay: eventData.startDay,
          link: eventData.link,
          description: eventData.description,
          eventTypeId: eventData.eventTypeId
        }, {
            where: {
                id: eventId
            }
      })
        .then(() => {
            console.log("Se edito el evento correctamente")
        })
  }
};