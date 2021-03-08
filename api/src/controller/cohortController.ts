import { Request, Response } from "express";
import { db } from "../database/models";

export const cohortController = {
  async getCohorts(req: Request, res: Response) {
    db.Cohort.findAll().then((data) => res.json(data));
  }
};
