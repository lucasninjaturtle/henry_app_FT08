import { Request, Response } from "express";
import { db } from "../database/models/index";
import bcryptjs from "bcryptjs";

const users = {
  getUser: function (req: Request, res: Response) {
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
  loadUsers: function (req: Request, res: Response) {
    try {
      console.log(req.body);
      return res.send("ok");
    } catch (error) {}
  },
  createAdmin: async function (req: Request, res: Response) {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    const newUser = await db.User.create({
      ...req.body,
      password: hashedPassword
    });
    const newAdmin = await db.Admin.create();
    newUser.setAdmin(newAdmin);
    res.sendStatus(200);
  }
};

export default users;
