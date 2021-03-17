import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";

export const cohortController = {
  /* Ruta para CREAR un COHORTE. */
  async createCohort(req: Request, res: Response) {
    const { name, instructorId, pmId, moduleId, startDay } = req.body as {
      name: string;
      startDay: Date;
      instructorId?: string;
      pmId?: string;
      moduleId?: string;
    };

    db.Cohort.create({ name, startDay }).then(async (cohort) => {
      if (instructorId) await cohort.setInstructor(+instructorId);

      if (moduleId)
        await db.Module.findByPk(+moduleId).then((module) =>
          module.addCohort(cohort.id)
        );
      res.sendStatus(200);
    });
  },
  /* Ruta para EDITAR un COHORTE x ID. */
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
    let cohort;
    if (name || startDay) {
      const mod: any = {};
      if (name) mod.name = name;
      if (startDay) {
        mod.startDay = new Date(
          +startDay.substr(0, 4),
          +startDay.substr(5, 2) - 1,
          +startDay.substr(8, 2)
        );
      }
      cohort = await db.Cohort.update(mod, {
        where: { id },
        returning: true
      });
      cohort = cohort[1][0];
    } else cohort = await db.Cohort.findByPk(id);
    if (moduleId) await cohort.setModule(moduleId);
    if (instructorId) await cohort.setInstructor(instructorId);
    res.sendStatus(200);
  },
  /* Ruta para BORRAR un COHORTE x ID. */
  async deleteCohort(req: Request, res: Response) {
    const { id } = req.params;
    const CohortData = await db.Cohort.findByPk(id);

    await db.Cohort.destroy({ where: { id: CohortData.id } });
    return res.sendStatus(200);
  },
  /* Ruta para BUSCAR todos los COHORTEs */
  async getCohorts(req: Request, res: Response) {
    db.Cohort.findAll().then((data) => res.json(data));
  },
  /* Ruta para BUSCAR un COHORTE x ID  */
  async getCohort(req: Request, res: Response) {
    const { id } = req.params;

    db.Cohort.findByPk(id, {
      include: [{ all: true, include: [{ all: true }] }]
    }).then((resp) => {
      const data = resp.toJSON();
      delete data.user;
      delete data.students;
      if (resp.students.length > 0)
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
      else data.students = [];

      delete data.instructor;
      if (resp.instructor)
        data.instructor = {
          github: resp.instructor.github,
          id: resp.instructor.id,
          groupId: resp.instructor.groupId,
          cohortId: resp.instructor.cohortId,
          cellphone: resp.instructor.user.cellphone,
          email: resp.instructor.user.email,
          userId: resp.instructor.user.userId,
          lastName: resp.instructor.user.lastName,
          name: resp.instructor.user.name
        };
      else data.instructor = {};

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
  async getUserByCohort(req: Request, res: Response) {
    const { id } = req.params;
    db.Student.findAll({
      include: {model: db.User},
      where: {
        cohortId: id
      }
    })
    .then((getAllStudents) => {
      res.json(getAllStudents)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  async bulkCreateCohort(req: Request, res: Response) {
    const cohortsData = req.body.map((data) => {
      let [date, month, year] = data.startDay.split("/");
      year = year.length === 2 ? "20" + year : year;
      return { ...data, startDay: new Date(year, +month - 1, date) };
    });
    db.Cohort.bulkCreate(cohortsData).then(() => res.sendStatus(200));
  }
};
