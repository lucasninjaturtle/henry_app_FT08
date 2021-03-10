import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";

export const cohortController = {
  async createCohort(req: Request, res: Response) {
    /* Codigo */
  },
  async putCohort(req: Request, res: Response) {
    /* Codigo */
  },
  async deleteCohort(req: Request, res: Response) {
    /* Codigo */
  },
  async getCohorts(req: Request, res: Response) {
    db.Cohort.findAll().then((data) => res.json(data));
  },
  async getCohort(req: Request, res: Response) {
    const { cohortId } = req.params;
    db.Student.findAll({ where: { cohortId } }).then(async (students) => {
      const studentsData = await Promise.all(
        students.map(async (student) => {
          const userData = await db.User.findByPk(student.userId);
          return {
            id: student.id,
            github: student.github,
            groupId: student.groupId,
            cohortId: student.cohortId,
            userId: userData.id,
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            cellphone: userData.cellphone
          };
        })
      );
      res.json(studentsData);
    });
  },
  async searchCohortByName(req: Request, res: Response) {
    const { name, limit = 5 } = req.query;

    if (!name || isNaN(+limit)) return res.sendStatus(400);

    db.Cohort.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` }
      },
      limit: +limit,
      order: [["name", "DESC"]]
    }).then((userData) => res.json(userData));
  },
  async getUserByGroup(req: Request, res: Response) {
    /* Codigo */
  }
};
