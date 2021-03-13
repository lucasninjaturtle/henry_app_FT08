import { Request, Response } from "express";
import { Op } from "sequelize";
import { db } from "../database/models";

export const moduleController = {
  async searchModuleByName(req: Request, res: Response) {
    const { name, limit = 5 } = req.query;

    if (!name || isNaN(+limit)) return res.sendStatus(400);

    db.Module.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` }
      },
      limit: +limit,
      order: [["name", "DESC"]]
    }).then((userData) => res.json(userData));
  }
};

export default moduleController;
