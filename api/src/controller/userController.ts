import { Request, Response } from "express";
import { db } from "../database/models/index";


export const users = {
  async getUsers(req: Request, res: Response) {
    // ola
  },
  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    db.User.findOne({
      where: {
        id : userId,
      },
    })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((response) => {
      res.send(response);
    });
  },

  loadUsers: function (req: Request, res: Response) {
    try {
      console.log(req.body);
      return res.send("ok");
    } catch (error) {}
  },
};
