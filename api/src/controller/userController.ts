import { Request, Response } from "express";
import { db } from "../database/models/index";

export const users = {
  async getUsers(req: Request, res: Response) {
    /* CODIGO */
  },
  async getUserById(req: Request, res: Response) {
    /* CODIGO */
  },

  loadUsers: function (req: Request, res: Response) {
    try {
      console.log(req.body);
      return res.send("ok");
    } catch (error) {}
  },
};
