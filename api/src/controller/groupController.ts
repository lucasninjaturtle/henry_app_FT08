import { Request, Response } from "express";
import { db } from "../database/models";

export const groupController = {
  async createGroup(req: Request, res: Response) {
    /* Codigo */
    db.Group.create({
      name: req.body.name
    }).then(r => {
      console.log("Good: ", r)
      if (req.body.cohortId) {
        r.setCohort(req.body.cohortId)
      }
      res.json(r)
    }).catch(e => {
      console.log("[groupController.ts] Error: ", e)
      res.send("Error")
    })
  },
  async putGroup(req: Request, res: Response) {
    /* Codigo */
  },
  async deleteGroup(req: Request, res: Response) {
    /* Codigo */
  },
  async getGroups(req: Request, res: Response) {
    /* Codigo */
  },
  async getGroup(req: Request, res: Response) {
    /* Codigo */
  },
  async getUserByGroup(req: Request, res: Response) {
    /* Codigo */
  },
};
