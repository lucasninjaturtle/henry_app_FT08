import { Request, Response } from "express";
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

};
