import { Request, Response } from "express";
import { db } from "../database/models";

export const cohortController = {
  /* Ruta para CREAR un COHORTE. */
  async createCohort(req: Request, res: Response) {
    /* Codigo */
    db.Cohort.create({
      name: req.body.name,
      startDay: req.body.startDay
    }).then(r => {
      console.log("Good: ", r)
      if (req.body.instructorId) {
        r.setInstructor(req.body.instructorId)
      }
      res.json(r)
    }).catch(e => {
      console.log("[cohortController.ts] Error: ", e)
      res.send("Error")
    })
  },
  /* Ruta para EDITAR un COHORTE x ID. */
  async putCohort(req: Request, res: Response) {
    /* Codigo */
  },
  /* Ruta para BORRAR un COHORTE x ID. */
  async deleteCohort(req: Request, res: Response) {
    /* Codigo */
  },
  /* Ruta para BUSCAR todos los COHORTEs */
  async getCohorts(req: Request, res: Response) {
    db.Cohort.findAll().then((data) => res.json(data));
  },
  /* Ruta para BUSCAR un COHORTE x ID  */
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
  /* Ruta para BUSCAR usuarios x COHORTE. */
  async getUserByGroup(req: Request, res: Response) {
    /* Codigo */
  },
};
