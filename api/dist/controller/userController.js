"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = {
    getUsers: function (req, res) {
        try {
            /* const response: QueryResult = await db.query('SELECT * FROM users');
            console.log(response.rows) */
            let respuesta = res;
            console.log(res);
            return res.status(200).send("Hola");
        }
        catch (e) {
            console.log(e);
            return res.status(500).json("Error");
        }
    },
};
exports.default = users;
