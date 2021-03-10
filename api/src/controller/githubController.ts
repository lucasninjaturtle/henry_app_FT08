import { Request, Response } from "express";
import { QueryResult } from "pg";
import axios from "axios";

export const githubController = {
  async getUserGHRepo(req: Request, res: Response) {
    res.json(req.user)
  },
};