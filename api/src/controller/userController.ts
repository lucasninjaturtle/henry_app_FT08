import { Request, Response } from 'express'
import { QueryResult } from 'pg'

const users = {
    getUsers: function (req: Request, res: Response) {
        try {
            /* const response: QueryResult = await db.query('SELECT * FROM users');
            console.log(response.rows) */
            let respuesta = res;
            console.log(res)
            return res.status(200).send("Hola")
        }
        catch (e) {
            console.log(e)
            return res.status(500).json("Error")
        }
    },
}

export default users