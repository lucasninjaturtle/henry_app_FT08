import { Request, Response } from "express";
import { db } from "../database/models/index";

export const users = {
  async createUsers(req: Request, res: Response) {
    /* CODIGO */
    let data = req.body;
    console.log("Data: ", data);

    try {
      let users = await db.User.bulkCreate(data, {
        fields: ["name", "lastName", "email", "cellphone"]
      });

      console.log("Usuarios registra2: ", users);

      users.forEach(async (inst, i) => {
        /* if (data[i].type === 'admin') {
          let adm = await db.Admin.create({})
        } */
        if (data[i].type === 'instructor') {
          try {
            let u = await db.Instructor.create({
              github: data[i].github
            })

            inst.setInstructor(u)

            let cohort = await db.Cohort.findOne({
              where: {
                name: data[i].cohort
              }
            })
            u.addCohort(cohort) // relacionar instructor con cohorte
            //cohort.addInstructor(u) // relacionar instructor con cohorte
          } catch (e) {
            console.log("Error linea 28: ", e);
          }
        } else if (data[i].type === 'pm') {
          try {
            let u = await db.ProjectManager.create({
              github: data[i].github
            })
            inst.setProjectmanager(u)

            let group = await db.Group.findOne({
              where: {
                name: data[i].group
              }
            })
            group.addProjectmanager(u) // relacionar pm con grupo
          } catch (e) {
            console.log("Error linea 28: ", e);
          }
        } else {
          //let student = itBe(db.Student, inst.setStudent, i)
          try {
            let u = await db.Student.create({
              github: data[i].github
            });
  
            inst.setStudent(u)

            let group = await db.Group.findOne({
              where: {
                name: data[i].group
              }
            })
            console.log("GRUPO: ", group)
            group.addStudent(u) // relacionar estudiante con grupo
  
            let cohort = await db.Cohort.findOne({
              where: {
                name: data[i].cohort
              }
            })
            console.log("COHORT: ", cohort)
            cohort.addStudent(u) // relacionar estudiante con cohorte
          } catch (e) {
            console.log("Error linea 28: ", e);
          }
        }
        //.then(r => console.log("Se hizo la relación user/student"))
      });
    } catch (e) {
      console.log("Error: ", e);
    }

    res.status(200).json(users)
  },
  async getUsers(req: Request, res: Response) {
    /* CODIGO */
    res.status(200).json({test: "asdf"})
  },
  async getUserById(req: Request, res: Response) {
    /* CODIGO */
    let id = req.params.id
    res.status(200).send(id)
  },
  async getUserByGh(req: Request, res: Response) {

    // ---------------
    /* CODIGO */
    let name = req.params.name
    // res.status(200).send(name)

    db.Student.findOne({
      include: [db.User, db.Cohort, db.Group],
      where: { github: name }
    }).then((getUserGrlData) => {
      console.log("usergrl: ", getUserGrlData)
      
      res.json(getUserGrlData.dataValues);
      /* let instructorName = getUserGrlData.dataValues.cohort.instructorId;
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
              where: { id: getUserGrlData.group.id }
            }
          ]
        }).then((getUserPM) => {
          db.Module.findAll({
            include: [
              {
                model: db.Cohort,
                where: { id: getUserGrlData.cohort.id }
              }
            ]
          }).then((getUserModule) => {
            let user = {
              name: getUserGrlData.user.name,
              lastname: getUserGrlData.user.lastName,
              githubUser: getUserGrlData.github,
              cohort: getUserGrlData.cohort.name,
              instructor: {
                firstname: getUserInstructor.user.name,
                lastname: getUserInstructor.user.lastName
              },
              group: getUserGrlData.group.name,
              module: getUserModule.name,
              projectManagers: {
                firstname: getUserPM.user.name,
                lastname: getUserPM.user.lastName
              },
              startDay: getUserGrlData.createdAt
            };
            res.json(user);
          });
        });
      }); */
    }).catch(e => {
      console.log("Error: ", e)
      res.status(500).send("Error")
    })

    /* 
    try {
      let student = await db.Student.findOne({
        include: [db.User, db.Cohort, db.Group],
        where: { github: name }
      })

      res.status(200).json(student)
    } catch (e) {
      console.log("Error: ", e)
      res.status(500).send("Error")
    } */



    /* res.json([
      {
        name:'test name',
        cohort:'tets cohort',
        user:'GITHUBUSER',
        group:'grupo test',
        lastname:'apellido test',
        module:'modulo test',
        pm:{lucas:'PM test'},
        startDay:'start',
        instructor:{firstname: 'primer nombre', lastname: 'apellido'},
      },
      demas cosas
    ]) */
  },

  loadUsers: function (req: Request, res: Response) {
    try {
      console.log(req.body);
      return res.send("ok");
    } catch (error) {}
  },
};
