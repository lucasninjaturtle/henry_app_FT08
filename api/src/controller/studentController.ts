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
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            cellphone: userData.cellphone
          };
        })
      );
      res.json(studentsData);
    });
  }
};
