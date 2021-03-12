import { Request, Response } from "express";
import { db } from "../database/models/index";


export const users = {
  async getUsers(req: Request, res: Response) {
    // ola
  },
  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    db.User.findOne({
      where: {
        id : userId,
      },
    })
    .then((response) => {
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
      
        let user ={
          name: getUserGrlData[index].user.name,
          lastName:  getUserGrlData[index].user.lastName,
          email:  getUserGrlData[index].user.email,
          cellphone:  getUserGrlData[index].user.cellphone
          studentId: getUserGrlData[index].id
        }
        rtdo.push(user);
      }
      res.json(rtdo);
    });
  },

  async putUserById(req: Request, res: Response) {
    const { id } = req.params;
    const { name, lastName, email, cellphone, password} = req.body;

    await db.User.update(
      { name: name,
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
  if(typeName === 'Instructor'){
    
    db.Instructor.findAll({
      include: [db.User]
    }).then((Data) => {
      res.json(fillUserInfo(Data));
    });
  }
  if(typeName === 'Student'){
    
    db.Student.findAll({
      include: [db.User, db.Cohort, db.Group]
    }).then((Data) => {
      res.json(fillUserInfo(Data));
    });
  }
  if(typeName === 'ProjectManager'){
    
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
      
      let user ={
        name: getUserGrlData[index].user.name,
        lastName:  getUserGrlData[index].user.lastName,
        email:  getUserGrlData[index].user.email,
        cellphone:  getUserGrlData[index].user.cellphone
        studentId: getUserGrlData[index].id
      }
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
  },
};



function fillUserInfo (array) {
  let rtdo = [];
 for (let index = 0; index < array.length; index++) {
   const element = array[index];
   
   let user ={
     name: array[index].user.name,
     lastName:  array[index].user.lastName,
     email:  array[index].user.email,
     cellphone:  array[index].user.cellphone
   }
   rtdo.push(user);
 }
 return rtdo;
}