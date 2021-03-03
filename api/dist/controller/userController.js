"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../database/models/index");
const users = {
    getUser: function (req, res) {
        index_1.db.Student.findAll({
            include: [index_1.db.User, index_1.db.Cohort, index_1.db.Group]
        })
            .then((getUserGrlData) => {
            let instructorName = getUserGrlData[0].cohort.dataValues.instructorId;
            index_1.db.Instructor.findOne({
                instructorName,
                include: { model: index_1.db.User }
            })
                .then((getUserInstructor) => {
                index_1.db.ProjectManager.findAll({
                    include: [{
                            model: index_1.db.User,
                        }, {
                            model: index_1.db.Group,
                            where: { id: getUserGrlData[0].group.id }
                        }]
                })
                    .then((getUserPM) => {
                    index_1.db.Module.findAll({
                        include: [{
                                model: index_1.db.Cohort,
                                where: { id: getUserGrlData[0].cohort.id }
                            }]
                    })
                        .then((getUserModule) => {
                        instructorName = getUserInstructor.user.name;
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
                        };
                        res.json(user);
                    });
                });
            });
        });
    },
};
exports.default = users;
