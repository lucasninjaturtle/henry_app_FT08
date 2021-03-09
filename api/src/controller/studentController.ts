import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";

export const studentController = {
  async getStudent(req: Request, res: Response) {
    const { id } = req.params;
    db.Student.findAll({
      include: [db.User, db.Cohort, db.Group],
      where: { id: id }
    }).then((getUserGrlData) => {
      let instructorName = getUserGrlData[0].cohort.dataValues.instructorId;
      db.Instructor.findOne({
        instructorName,
        include: { model: db.User }
      }).then((getUserInstructor) => {
        db.ProjectManager.findAll({
          include: [
            {
              model: db.User
            },
            {
              model: db.Group,
              where: { id: getUserGrlData[0].group.id }
            }
          ]
        }).then((getUserPM) => {
          db.Module.findAll({
            include: [
              {
                model: db.Cohort,
                where: { id: getUserGrlData[0].cohort.id }
              }
            ]
          }).then((getUserModule) => {
            let user = {
              name: getUserGrlData[0].user.name,
              lastname: getUserGrlData[0].user.lastName,
              githubUser: getUserGrlData[0].github,
              cohort: getUserGrlData[0].cohort.name,
              instructor: {
                firstname: getUserInstructor.user.name,
                lastname: getUserInstructor.user.lastName
              },
              group: getUserGrlData[0].group.name,
              module: getUserModule[0].name,
              projectManagers: {
                firstname: getUserPM[0].user.name,
                lastname: getUserPM[0].user.lastName
              },
              startDay: getUserGrlData[0].createdAt
            };
            res.json(user);
          });
        });
      });
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
