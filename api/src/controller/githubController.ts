import {Request, Response} from 'express'
import {QueryResult} from 'pg'

const github = {
    getgithub: function(req: Request, res: Response) {
        try {
            /* const response: QueryResult = await db.query('SELECT * FROM users');
            console.log(response.rows) */
            console.log("Hola")
            return res.status(200).json("Hola")
        }
        catch(e) {
            console.log(e)
            return res.status(500).json("Error")
        }
    },
}

export default github;