import {Request, Response} from 'express'
import {QueryResult} from 'pg'
import db from "../database/models/index"

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
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
}