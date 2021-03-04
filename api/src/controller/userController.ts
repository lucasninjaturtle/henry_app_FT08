import { Request, Response } from 'express'
import { QueryResult } from 'pg'

const users = {
    getUsers: function (req: Request, res: Response) {
        try {
            /* const response: QueryResult = await db.query('SELECT * FROM users');
            console.log(response.rows) */
            console.log("Hola")
            return res.status(200).json("Hola")
        }
        catch (e) {
            console.log(e)
            return res.status(500).json("Error")
        }
    },
    loadUsers: function (req: Request, res: Response){

        try {
            console.log(req.body)
            return res.send('ok')
            
        } catch (error) {
            
        }
    },
}

export default users