import { Request, Response } from "express";
import { db } from "../database/models";

export const adminController = {
  async createAdmin(req: Request, res: Response) {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    const newUser = await db.User.create({
        ...req.body,
        password: hashedPassword
    });
    const newAdmin = await db.Admin.create();
    newUser.setAdmin(newAdmin);
    res.sendStatus(200);
  },
  async getAdmin(req: Request, res: Response) {
    /* CODIGO */
  },
  async putAdmin(req: Request, res: Response) {
    /* CODIGO */
  },
  async deleteAdmin(req: Request, res: Response) {
    /* CODIGO */
  }
};
