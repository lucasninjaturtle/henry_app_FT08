import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";

export const cohortController = {
  async createCohort(req: Request, res: Response) {
    /* Codigo */
  },
  async putCohort(req: Request, res: Response) {
    const { id } = req.params;

    const {
      name,
      startDay,
      instructorId,
      moduleId,
      groups,
      students
    } = req.body as {
      name: string;
      startDay: string;
      instructorId: string;
      moduleId: string;
      students: null | [];
      groups: null | [];
    };
    //TODO: add startDay
    const cohort = await db.Cohort.update(
      { name },
      { where: { id }, returning: true }
    );
    if (moduleId) await cohort.setModule(moduleId);
    if (instructorId) await cohort.setInstructor(instructorId);
    res.sendStatus(200);
  },
  async deleteCohort(req: Request, res: Response) {
    /* Codigo */
  },
  async getCohorts(req: Request, res: Response) {
    db.Cohort.findAll().then((data) => res.json(data));
  },
  async getCohort(req: Request, res: Response) {
    const { id } = req.params;

    db.Cohort.findByPk(id, {
      include: [{ all: true, include: [{ all: true }] }]
    }).then((resp) => {
      const data = resp.toJSON();
      delete data.user;
      delete data.students;
      data.students = resp.students.map((student) => ({
        github: student.github,
        id: student.id,
        groupId: student.groupId,
        cohortId: student.cohortId,
        cellphone: student.user.cellphone,
        email: student.user.email,
        userId: student.user.userId,
        lastName: student.user.lastName,
        name: student.user.name
      }));
      res.json(data);
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
