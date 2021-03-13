import { Request, Response } from "express";
import { db } from "../database/models";

export const groupController = {
  async createGroup(req: Request, res: Response) {
    db.Group.create({
      name: req.body.name
    }).then(r => {
      
      if (req.body.cohortId) {
        r.setCohort(req.body.cohortId)
      }
      res.json(r)
    }).catch(e => {
      console.log("[groupController.ts] Error: ", e)
      res.send("Error")
    })
  },
  async putGroup(req: Request, res: Response) {
    const { id } = req.params;
      const { name } = req.body;
  
      await db.Group.update(
        { name: name
        }, 
          {
            returning: true,
            where: {
            id: id
                   }
            }
      );
      
      return res.sendStatus(200);

  },
  async deleteGroup(req: Request, res: Response) {
    const { id } = req.params;
    const GroupData = await db.Group.findByPk(id);
    
    await db.Group.destroy({ where: { id: GroupData.id } });
    return res.sendStatus(200);
  },
  async getGroups(req: Request, res: Response) {
    /* Codigo */
  },
  async getGroup(req: Request, res: Response) {
    /* Codigo */
  },
  async getUserByGroup(req: Request, res: Response) {
    /* Codigo */
  },
};
