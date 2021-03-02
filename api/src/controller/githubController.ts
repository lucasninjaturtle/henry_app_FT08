import {Request, Response} from 'express'
import {QueryResult} from 'pg'
import axios from "axios"

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
    test: async function (req: Request, res: Response) {
        axios.get("http://api.github.com/users/MarcosGrizzuti/repos")
        .then((res) => {
            console.log(res)
        })
    }
}

export default github;