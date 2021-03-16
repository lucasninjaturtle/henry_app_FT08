import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";
import { UserAttributes } from "../database/models/User";
import { StudentAttributes } from "../database/models/Student";
import { cohortAttributes } from "../database/models/Cohort";
import { groupAttributes } from "../database/models/Group";

export const studentController = {
  async getStudent(req: Request, res: Response) {
    const { idOrGithub } = req.params;
    const query: any = {};
    if (isNaN(+idOrGithub)) query.github = idOrGithub;
    else query.id = idOrGithub;

    const {
      id,
      user: { lastName, name, cellphone, email, githubToken },
      github,
      cohort,
      createdAt,
      group
    } = ((await db.Student.findOne({
      where: query,
      include: [db.User, db.Cohort, db.Group]
    })) as unknown) as {
      user: UserAttributes;
      cohort: cohortAttributes | null;
      group: groupAttributes | null;
      userId: number | null;
      groupId: number | null;
      cohortId: number | null;
    } & StudentAttributes;

    let userData: any = {
      name,
      id,
      lastName,
      github,
      githubToken,
      cohort: cohort?.name ?? null,
      group: group?.name ?? null,
      startDay: createdAt,
      cellphone,
      email
    };

    if (cohort) {
      await db.Instructor.findByPk(cohort.instructorId, {
        include: [{ model: db.User }]
      }).then((resp) => {
        if (resp)
          userData.instructor = {
            firstName: resp.user.name,
            lastName: resp.user.lastName
          };
        else userData.instructor = null;
      });
      await db.Module.findOne({
        include: [{ model: db.Cohort, where: { id: cohort.id } }]
      }).then((resp) => {
        userData.module = resp?.name ?? null;
      });
    } else {
      userData.module = null;
      userData.instructor = null;
    }

    if (group) {
      await db.ProjectManager.findAll({
        include: [
          {
            model: db.User
          },
          {
            model: db.Group,
            where: { id: group.id }
          }
        ]
      }).then((resp) => {
        if (resp)
          userData.projectManagers =
            resp?.map((pm) => ({
              firstName: pm.user.name,
              lastName: pm.user.lastName
            })) ?? [];
      });
    } else {
      userData.projectManagers = [];
    }

    // console.log(userData);

    res.json(userData);
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
    } catch (e) {
      return res.status(400).json(e);
    }

    res.sendStatus(200);
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
