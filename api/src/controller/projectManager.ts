import { Request, Response } from "express";
import { db } from "../database/models";
import { UserAttributes } from "../database/models/User";
import { projectManagerAttributes } from "../database/models/ProjectManager";
import { Op } from "sequelize";

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
  },
  async searchPmByName(req: Request, res: Response) {
    const { limit = 15, name } = (req.query as unknown) as {
      name: string;
      limit: number;
    };

    if (!name || isNaN(limit)) return res.sendStatus(400);

    db.User.findAll({
      where: {
        [Op.or]: {
          name: { [Op.iLike]: `%${name}%` },
          lastName: { [Op.iLike]: `%${name}%` }
        }
      },
      // SOLO los estudiantes, sino trae TODOS los usuarios, sean estudiantes, pms, etc.
      include: [
        { model: db.ProjectManager, where: { userId: { [Op.ne]: null } } }
      ],
      limit,
      order: [["name", "DESC"]]
    }).then((usersData) => {
      res.json(
        usersData.map((pm) => ({
          name: pm.name,
          id: pm.name,
          lastName: pm.lastName
        }))
      );
    });
  },
  async bulkCreate(req: Request, res: Response){
    const pmsData = req.body as any[];
    
    const usersData = await pmsData.forEach(async (pm) => {
      const {
        cellphone,
        email,
        github,
        name,
        lastName,
        groupId
      } = pm

      const newUser = await db.User.create({
        name,
        lastName,
        cellphone,
        email
      });

      const newPM = await db.ProjectManager.create({ github });
      await newUser.setProjectmanager(newPM);
      if (groupId) await newPM.setGroup(groupId);
    })
    
    return res.sendStatus(200);
};
