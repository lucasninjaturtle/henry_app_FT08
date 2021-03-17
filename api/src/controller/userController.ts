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

      let cohortsToCreate = [], groupsToCreate = []

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
          let group, cohort

          try {
            let student = await db.Student.create({
              github: data[i].github
            });
  
            inst.setStudent(student)

            group = await db.Group.findOne({
              where: {
                name: data[i].group
              }
            })
            //console.log("Busqueda de grupo: ", group)
            if (!group) {
              /* console.log("No hay grupo: ", data[i].group)
              group = await db.Group.create({
                name: data[i].group
              })
              console.log("Grupo crea2: ", group) */
              groupsToCreate.push({
                name: data[i].group,
                student
              })
            } else group.addStudent(student)

            cohort = await db.Cohort.findOne({
              where: {
                name: data[i].cohort
              }
            })
            // console.log("Busqueda de cohorte: ", cohort)
            if (!cohort) {
              cohortsToCreate.push(db.Cohort.create({
                name: data[i].cohort,
                startDay: 'A definir'
              }))
            } else cohort.addStudent(student)
          } catch (e) { console.log("*ERROR* [userController.ts] -> ", e) }
        }
        //.then(r => console.log("Se hizo la relación user/student"))
      });

      if (cohortsToCreate[0]) {
        Promise.all(cohortsToCreate).then(res => {
          // lo mismo con los grupos, y relacionar to2
          
        })
      }
      console.log("A crear: ", cohortsToCreate, groupsToCreate)

    } catch (e) {
      console.log("Error: ", e);
    }

    res.status(200).json(users)
  },
  async getUsers(req: Request, res: Response) {
    // ola
  },
  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    db.User.findOne({
      where: {
        id: userId
      }
    })
      .then((response) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((response) => {
        res.send(response);
      });
  },

  async getUsersByCohort(req: Request, res: Response) {
    const { id } = req.params;
    db.Student.findAll({
      include: [db.User, db.Cohort, db.Group],
      where: { cohortId: id }
    }).then((getUserGrlData) => {
      let rtdo = [];
      for (let index = 0; index < getUserGrlData.length; index++) {
        const element = getUserGrlData[index];

        let user = {
          name: getUserGrlData[index].user.name,
          lastName: getUserGrlData[index].user.lastName,
          email: getUserGrlData[index].user.email,
          cellphone: getUserGrlData[index].user.cellphone,
          studentId: getUserGrlData[index].id
        };
        rtdo.push(user);
      }
      res.json(rtdo);
    });
  },

  async putUserById(req: Request, res: Response) {
    const { id } = req.params;
    const { name, lastName, email, cellphone, password } = req.body;

    await db.User.update(
      {
        name: name,
        lastName: lastName,
        email: email,
        cellphone: cellphone,
        password: password
      },
      {
        returning: true,
        where: {
          id: id
        }
      }
    );
    return res.sendStatus(200);
  },

  async getUsersByType(req: Request, res: Response) {
    const { typeName } = req.params;
    let arrayUsers = [];
    let rtdo = [];
    if (typeName === "Instructor") {
      db.Instructor.findAll({
        include: [db.User]
      }).then((Data) => {
        res.json(fillUserInfo(Data));
      });
    }
    if (typeName === "Student") {
      db.Student.findAll({
        include: [db.User, db.Cohort, db.Group]
      }).then((Data) => {
        res.json(fillUserInfo(Data));
      });
    }
    if (typeName === "ProjectManager") {
      db.ProjectManager.findAll({
        include: [db.User]
      }).then((Data) => {
        res.json(fillUserInfo(Data));
      });
    }
  },

  async getUsersByGroup(req: Request, res: Response) {
    const { id } = req.params;
    db.Student.findAll({
      include: [db.User, db.Cohort, db.Group],
      where: { groupId: id }
    }).then((getUserGrlData) => {
      let rtdo = [];
      for (let index = 0; index < getUserGrlData.length; index++) {
        const element = getUserGrlData[index];

        let user = {
          name: getUserGrlData[index].user.name,
          lastName: getUserGrlData[index].user.lastName,
          email: getUserGrlData[index].user.email,
          cellphone: getUserGrlData[index].user.cellphone,
          studentId: getUserGrlData[index].id
        };
        rtdo.push(user);
      }
      res.json(rtdo);
    });
  },

  loadUsers: function (req: Request, res: Response) {
    try {
      console.log(req.body);
      return res.send("ok");
    } catch (error) {}
  }
};

function fillUserInfo(array) {
  let rtdo = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    let user = {
      name: array[index].user.name,
      lastName: array[index].user.lastName,
      email: array[index].user.email,
      cellphone: array[index].user.cellphone
    };
    rtdo.push(user);
  }
  return rtdo;
}
