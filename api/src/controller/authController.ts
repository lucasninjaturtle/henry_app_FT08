import { Request, Response } from 'express'

const auth = {
    getAuth: function (req: Request, res: Response) {
        console.log("Se inicio correctamente")
        res.status(200).send("Se inicio correctamente")
    },

}

export default auth