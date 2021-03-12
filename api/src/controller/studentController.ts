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
      user: { lastName, name, cellphone, email },
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
      lastName,
      github,
      cohort: cohort?.name ?? null,
      group: group?.name ?? null,
      startDay: createdAt,
      cellphone,
      email
    };


    if (cohort) {
      await db.Instructor.findByPk(cohort.instructorId, {include: [{ model: db.User,}] }).then((resp) => {
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

    res.json(userData);
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
  },
  async deleteStudent(req: Request, res: Response) {
    /* CODIGO */
  },
  async createStudent(req: Request, res: Response) {
    //let data = req.body.map(obj => delete obj.github)
    let data = req.body;
    console.log("Data: ", data);

    try {
      let users = await db.User.bulkCreate(data, {
        fields: ["name", "lastName", "email", "cellphone"]
      });

      console.log("Usuarios registra2: ", users);
      users.forEach(async (inst, i) => {
        try {
          let u = await db.Student.create({
            github: data[i].github
          });

          inst.setStudent(u);
        } catch (e) {
          console.log("Error linea 91: ", e);
        }
        //.then(r => console.log("Se hizo la relación user/student"))
      });
    } catch (e) {
      console.log("Error: ", e);
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
  }
};
