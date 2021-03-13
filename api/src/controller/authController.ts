import axios from "axios";
import { Request, Response } from "express";
import { setIndexes } from "sequelize-typescript";
import { db } from "../database/models";

export const authController = {
  async webappAuth(req: Request, res: Response) {
    if (req.isAuthenticated()) return res.sendStatus(200);
    res.sendStatus(401);
  },
  async mobileAppAuth(req: Request, res: Response) {
    // console.log(req.session)
    // console.log("El usuario se ha iniciado correctamente")
  },

  async githubCode(req: Request, res: Response) {
    const { client_id, client_secret, code } = req.body;
    console.log(client_id, client_secret, code)
    axios.post(`https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`)
      .then((resp: any) => {
        // console.log(resp)
        let token = resp.data.split('&')[0].split('=')[1]
        res.status(200).json(token)
      }).catch(err => {
        // console.log(req.body)
        // console.log(err)
      })
  }
};
