import { Request, Response } from "express";
import { db } from "../database/models";
import { UserAttributes } from "../database/models/User";
import { projectManagerAttributes } from "../database/models/ProjectManager";

type userAndPM = UserAttributes &
  projectManagerAttributes & {
    instructorId: number | null;
  };

export const projectManagerController = {
  async createPM(req: Request, res: Response) {
    const {
      cellphone,
      email,
      github,
      name,
      lastName,
      groupId
    } = req.body as any;

    const newUser = await db.User.create({
      name,
      lastName,
      cellphone,
      email
    });
    const newPM = await db.ProjectManager.create({ github });
    await newUser.setProjectmanager(newPM);
    if (groupId) await newPM.setGroup(groupId);
    return res.sendStatus(200);
  },
  async getPM(req: Request, res: Response) {
    /* CODIGO */
  },
  async putPM(req: Request, res: Response) {
    const { id: PMId } = req.params;
    const {
      name,
      lastName,
      email,
      cellphone,
      github,
      id
    } = req.body as userAndPM;

    await db.User.update(
      { name, lastName, email, cellphone },
      { where: { id } }
    );
    await db.ProjectManager.update({ github }, { where: { id: PMId } });
    res.sendStatus(200);
  },
  async deletePM(req: Request, res: Response) {
    const { id: PMId } = req.params;
    const ProjectManagerData = await db.ProjectManager.findByPk(PMId);
    console.log(PMId, ProjectManagerData.userId);
    await db.User.destroy({ where: { id: ProjectManagerData.userId } });
    await db.ProjectManager.destroy({ where: { id: PMId } });
    return res.sendStatus(200);
  }
};
