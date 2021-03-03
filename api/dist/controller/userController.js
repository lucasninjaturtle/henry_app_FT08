"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../database/models/index");
const users = {
    getUser: function (req, res) {
        const { id } = req.params;
        index_1.db.Student.findAll({
            include: [index_1.db.User, index_1.db.Cohort, index_1.db.Group],
            where: { id: id }
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
                            startDay: getUserGrlData[0].createdAt,
                        };
                        res.json(user);
                    });
                });
            });
        });
    },
};
exports.default = users;
