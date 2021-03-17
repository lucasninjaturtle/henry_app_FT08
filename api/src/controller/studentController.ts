import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";
import { projectManager } from "../database/models/ProjectManager";

export const studentController = {
  async getStudent(req: Request, res: Response) {
    const { idOrGithub } = req.params;
    const query: any = {};
    if (isNaN(+idOrGithub)) query.github = idOrGithub;
    else query.id = idOrGithub;

    const userData = await db.Student.findOne({
      where: query,
      attributes: ["id", "github"],
      include: [
        {
          model: db.User,
          attributes: ["name", "lastName", "cellphone", "email", "githubToken"]
        },
        {
          model: db.Cohort,
          attributes: ["id", "name"],
          include: [
            {
              model: db.Instructor,
              attributes: ["id", "github"],
              include: [
                {
                  model: db.User,
                  attributes: [["name", "firstName"], "lastName"]
                }
              ]
            },
            {
              model: db.Module,
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: db.Group,
          attributes: ["id", "name"],
          include: [
            {
              model: db.ProjectManager,
              attributes: ["id", "github"],
              include: [
                {
                  model: db.User,
                  attributes: [["name", "firstName"], "lastName"]
                }
              ]
            }
          ]
        }
      ]
    });
    if (!userData) return res.sendStatus(404);
    let data = userData.toJSON() as any;

    if (data.cohort?.instructor) {
      data.instructor = {
        ...data.cohort.instructor,
        ...data.cohort.instructor.user
      };
      delete data.instructor.user;
      delete data.cohort.instructor;
    }

    if (data.cohort?.module) {
      data.module = { ...data.cohort.module };
      delete data.cohort.module;
    }

    if (data.group?.projectmanagers?.length > 0) {
      const pms = data.group.projectmanagers.map((pm) => {
        const userData = { ...pm.user };
        delete pm.user;
        return { ...pm, ...userData };
      });
      data.projectManagers = pms;
      delete data.group.projectmanagers;
    }

    data = { ...data, ...data.user };
    delete data.user;

    /* ----- DEVUELVE ----

    {
      id: number;
      github: string;
      cohort: null | { id: number; name: string };
      group: null | { id: number; name: string };
      instructor: null | {
        id: number;
        github: string;
        firstName: string;
        lastName: string;
      };
      projectManagers:
        [] | {
            id: number;
            github: string;
            firstName: string;
            lastName: string;
          }[];
      lastName: string;
      name: string;
      cellphone: string;
      email: string;
      githubToken: string;
      module: null | { name: string; id: number; }
    };

     --------------------- */

    res.json(data);
  },
  async putStudent(req: Request, res: Response) {
    console.log(req.body);
    type studentData = {
      id: number;
      github: string;
      githubToken: string;
      groupId: number;
      cohortId: number;
      name: string;
      lastName: string;
      email: string;
      cellphone: string;
      userId: number;
    };
    let data;
    if (Array.isArray(req.body)) {
      data = req.body as studentData[];

      await Promise.all(
        data.map(
          async ({
            cellphone,
            cohortId,
            email,
            github,
            githubToken,
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
              { cellphone, githubToken, email, lastName, name },
              { where: { id: userId } }
            );
          }
        )
      );
    } else {
      data = req.body as studentData;
      const { id } = req.params;
      const {
        cellphone,
        cohortId,
        email,
        github,
        githubToken,
        groupId,
        lastName,
        name,
        userId
      } = data;
      const userData = await db.User.findOne({
        include: [{ model: db.Student, where: { id } }]
      });
      for (var [key, value] of Object.entries(data)) {
        userData[key] = value;
      }
      await userData.save();
      await db.Student.update({ github, groupId, cohortId }, { where: { id } });
    }

    // if (githubToken) {
    //   console.log('Entroooooo......')
    //   const user = await db.User.findOne({ include: [{ model: db.Student, where: { id } }] })
    //   user.githubToken = githubToken
    //   await user.save();
    // }

    res.sendStatus(200);
  },
  async deleteStudent(req: Request, res: Response) {
    /* CODIGO */
  },
  async createStudent(req: Request, res: Response) {
    const { github, groupId, ...userData } = req.body;
    try {
      const newUser = await db.User.create(userData);
      const newStudent = await db.Student.create({ github });
      await newUser.setStudent(newStudent);
      if (groupId) await newStudent.setGroup(groupId);
      res.json(newStudent);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  async searchStudentByName(req: Request, res: Response) {
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
      include: [{ model: db.Student, where: { userId: { [Op.ne]: null } } }],
      limit,
      order: [["name", "DESC"]]
    }).then((userData) => res.json(userData));
  },
  async bulkCreateStudents(req: Request, res: Response) {
    const studentsData = req.body as any[];

    for (let i = 0; i < studentsData.length; i++) {
      try {
        const { github, groupId, ...userData } = studentsData[i];
        const newUser = await db.User.create(userData);
        const newStudent = await db.Student.create({ github });
        await newUser.setStudent(newStudent);
        if (groupId) await newStudent.setGroup(groupId);
      } catch (e) {
        return res.status(400).json(e);
      }
    }
    return res.sendStatus(200);
  }
};
