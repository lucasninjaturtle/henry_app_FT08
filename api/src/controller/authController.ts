import axios from "axios";
import { Request, Response } from "express";
import { setIndexes } from "sequelize-typescript";
import { db } from "../database/models";

export const authController = {
  async webappAuth(req: Request, res: Response) {
    if (req.isAuthenticated()) return res.sendStatus(200);
    res.sendStatus(401);
  },
  async githubCode(req: Request, res: Response) {
    const { client_id, client_secret, code } = req.body;
    axios
      .post(
        `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`
      )
      .then((resp: any) => {
        let token = resp.data.split("&")[0].split("=")[1];
        res.status(200).json(token);
      })
      .catch((err) => {
        console.log("Linea 24: " + err);
      });
  },
  async githubUser(req: Request, res: Response) {
    const { data } = req.body;
    db.Student.findOne({
      where: {
        github: data
      }
    })
      .then((resp) => {
        if (!resp) {
          res.sendStatus(401);
        } else {
          res.sendStatus(200);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
