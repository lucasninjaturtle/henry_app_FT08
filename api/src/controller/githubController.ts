import { Request, Response } from "express";
import { QueryResult } from "pg";
import axios from "axios";

export const githubController = {
  async getUserGHRepo(req: Request, res: Response) {
    console.log(req.session)
    /* axios.get("https://api.github.com/user/repos", {
      headers: {
        "Authorization": `Bearer ${req.user.token}`
        }
      })
        .then((resp) => {
            console.log(resp)
        }) */
  },
};