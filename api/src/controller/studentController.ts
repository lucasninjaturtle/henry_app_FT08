import { Request, Response } from "express";
import { db } from "../database/models";

export const studentController = {
  async getStudentsByCohort(req: Request, res: Response) {
    const { cohortId } = req.params;
    db.Student.findAll({ where: { cohortId } }).then((data) => res.json(data));
  }
};
