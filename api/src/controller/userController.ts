import { Request, Response } from 'express'
import { where } from 'sequelize'
import  { db } from "../database/models/index"

const users = {
    getUser: function (req: Request, res: Response) {
        db.Student.findAll({
            include: [db.User, db.Cohort, db.Group ]
        })
            .then((getUserGrlData) => {
                let instructorName = getUserGrlData[0].cohort.dataValues.instructorId;
                db.Instructor.findOne({
                    instructorName,
                    include: {model: db.User}
                })
                    .then((getUserInstructor) => {
                        db.ProjectManager.findAll({
                            include: [{
                                model: db.User,
                            }, {
                                model: db.Group,
                                where: { id: getUserGrlData[0].group.id }
                            }]
                        })
                            .then((getUserPM) => {
                                db.Module.findAll({
                                    include: [{
                                        model: db.Cohort,
                                        where: { id: getUserGrlData[0].cohort.id }
                                    }]
                                })
                                    .then((getUserModule) => {
                                        instructorName = getUserInstructor.user.name
                                        let search = getUserGrlData[0];
                                        let user = {
                                            name: search.user.name,
                                            lastname: search.user.lastName,
                                            githubUser: search.github,
                                            cohort: search.cohort.name,
                                            instructor: instructorName,
                                            group: getUserGrlData[0].group.name,
                                            module: getUserModule[0].name,
                                            projectManagers: {
                                                firstname: getUserPM[0].user.name,
                                                lastname: getUserPM[0].user.lastName
                                            },
                                            startDay: "03/03/2021",
                                        }
                                        res.json(user)
                                    })
                            })
                    })
            })
    },
}

export default users;