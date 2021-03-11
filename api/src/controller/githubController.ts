import { Request, Response } from "express";
import { QueryResult } from "pg";
import axios from "axios";

export const githubController = {
  async getUserGHRepo(req: Request, res: Response) {
    axios.get("https://api.github.com/user/repos", {
      headers: {
        "Authorization": `Bearer ${req.user}`
        }
      })
        .then((getUserAllGHRepos) => {
          var privateRepos = []
          getUserAllGHRepos.data.map((UserGHRep) => {
            if(UserGHRep.private == true) {
              /* return privateRepos.push(UserGHRep) */
              let commitURL =  "https://api.github.com"
              console.log(UserGHRep)
              /* axios.get(`commitURL/repos/${UserGHRep.owner.login}/${UserGHRep.name}/commits`)
                .then((resp) => {
                  console.log(resp)
                }) */
            }
          })
        })
  },
};