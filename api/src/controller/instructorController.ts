import { Request, Response } from "express";
import { db } from "../database/models";
import { UserAttributes } from "../database/models/User";
import { instructorAttributes } from "../database/models/Instructor";
import { Op } from "sequelize";

export const instructorController = {
  async createInstructor(req: Request, res: Response) {
    try {
      const {
        name,
        lastName,
        email,
        cellphone,
        github,
        cohortId
      } = req.body as any;
      const newUser = await db.User.create({
        name,
        lastName,
        cellphone,
        email
      });
      const newInstructor = await db.Instructor.create({ github });
      await newUser.setInstructor(newInstructor);
      if (cohortId) {
        await newInstructor.addCohort(cohortId);
      }
      return res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  },
  async getInstructor(req: Request, res: Response) {
    const { id } = req.params;
    db.Instructor.findByPk(id, { include: [{ all: true }] }).then((resp) => {
      const {
        id,
        user: { lastName, name, cellphone, email },
        github,
        cohorts
      } = resp;
      res.json({
        id,
        lastName,
        name,
        cellphone,
        email,
        github,
        cohorts
      });
    });
  },
  async putInstructor(req: Request, res: Response) {
    const { id: instructorId } = req.params;
    const {
      name,
      lastName,
      email,
      cellphone,
      github
    } = req.body as userAndInstructor;

    await db.User.findOne({
      include: [{ model: db.Instructor, where: { id: instructorId } }]
    }).then(async (resp) => {
      if (name) resp.name = name;
      if (email) resp.email = email;
      if (lastName) resp.lastName = lastName;
      if (cellphone) resp.cellphone = cellphone;
      await resp.save();
    });
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
  },
  async searchInstructorByName(req: Request, res: Response) {
    const { limit = 15, name } = (req.query as unknown) as {
      name: string;
      limit: number;
    };

    if (!name || isNaN(limit)) return res.sendStatus(400);
    db.Instructor.findAll({
      include: [
        {
          model: db.User,
          where: {
            [Op.or]: {
              name: { [Op.iLike]: `%${name}%` },
              lastName: { [Op.iLike]: `%${name}%` }
            }
          }
        }
      ],
      limit
    }).then((instructors) => {
      let data = instructors.map((instructor) => {
        const {
          id,
          user: { lastName, name, cellphone, email }
        } = instructor;
        return {
          id,
          lastName,
          name,
          cellphone,
          email,
          github: instructor.github
        };
      });
      data = data.sort((prev, next) =>
        prev.name === next.name ? 0 : prev.name > next.name ? 1 : -1
      );
      res.json(data);
    });
  }
};
