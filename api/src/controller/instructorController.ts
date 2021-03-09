import { Request, Response } from "express";
import { db } from "../database/models";
import { UserAttributes } from "../database/models/User";
import { instructorAttributes } from "../database/models/Instructor";

type userAndInstructor = UserAttributes &
  instructorAttributes & {
    instructorId: number | null;
  };

export const instructorController = {
  async createInstructor(req: Request, res: Response) {
    try {
      const {
        name,
        lastName,
        email,
        cellphone,
        github
      } = req.body as userAndInstructor;
      const newUser = await db.User.create({
        name,
        lastName,
        cellphone,
        email
      });
      const newInstructor = await db.Instructor.create({ github });
      await newUser.setInstructor(newInstructor);
      return res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  async getInstructor(req: Request, res: Response) {},
  async putInstructor(req: Request, res: Response) {
    const { id: instructorId } = req.params;
    const {
      name,
      lastName,
      email,
      cellphone,
      github,
      id
    } = req.body as userAndInstructor;

    await db.User.update(
      { name, lastName, email, cellphone },
      { where: { id } }
    );
    await db.Instructor.update({ github }, { where: { id: instructorId } });
    res.sendStatus(200);
  },
  async deleteInstructor(req: Request, res: Response) {
    const { id: instructorId } = req.params;
    const instructorData = await db.Instructor.findByPk(instructorId);
    console.log(instructorId, instructorData.userId);
    await db.User.destroy({ where: { id: instructorData.userId } });
    await db.Instructor.destroy({ where: { id: instructorId } });
    return res.sendStatus(200);
  }
};
