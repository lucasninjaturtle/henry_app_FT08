import { Request, Response } from "express";
import { db } from "../database/models";

export const studentController = {
  async getStudentsByCohort(req: Request, res: Response) {
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
  async putStudent(req: Request, res: Response) {
    type studentData = {
      id: number;
      github: string;
      groupId: number;
      cohortId: number;
      name: string;
      lastName: string;
      email: string;
      cellphone: string;
      userId: number;
    };
    const data = req.body as studentData[];

    await Promise.all(
      data.map(
        async ({
          cellphone,
          cohortId,
          email,
          github,
          groupId,
          id,
          lastName,
          name,
          userId
        }) => {
          await db.Student.update(
            { github, groupId, cohortId },
            { where: { id } }
          );
          await db.User.update(
            { cellphone, email, lastName, name },
            { where: { id: userId } }
          );
        }
      )
    );

    res.sendStatus(200);
  }
};
