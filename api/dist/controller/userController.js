"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = {
    getUsers: function (req, res) {
        try {
            /* const response: QueryResult = await db.query('SELECT * FROM users');
            console.log(response.rows) */
            console.log("Hola");
            return res.status(200).json("Hola");
        }
        catch (e) {
            console.log(e);
            return res.status(500).json("Error");
        }
    },
    loadUsers: function (req, res) {
        try {
            console.log(req.body);
            return res.send('ok');
        }
        catch (error) {
        }
    },
};
exports.default = users;
