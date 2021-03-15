import { Request, Response } from "express";
import { QueryResult } from "pg";
import axios from "axios";

export const githubController = {
  async getUserGHRepo(req: Request, res: Response) {
    axios.get(`https://api.github.com/user/repos`, {
      headers: {
        "Authorization": `Bearer 60b4591aca2685de1fc08fe109dbbcb4a9d48aef`
        }
      })
        .then((getUserAllGHRepos) => {
          var privateRepos = []
          var commitsArray = []
          var arrayPromises = []

          getUserAllGHRepos.data.forEach((UserGHRep) => {
            if(UserGHRep.fork == true) {
              if(UserGHRep.name == "Curso.Prep.Henry" ||UserGHRep.name == "FT-M1" || UserGHRep.name == "FT-M2" || UserGHRep.name == "FT-M3" || UserGHRep.name == "FT-M4" ||
              UserGHRep.name.slice(0, 12) == "ecommerce-ft") {
                arrayPromises.push(axios.get(`https://api.github.com/repos/${UserGHRep.owner.login}/${UserGHRep.name}/commits`, {
                  headers: {
                    "Authorization": `Bearer 60b4591aca2685de1fc08fe109dbbcb4a9d48aef`
                    }
                }))

                privateRepos.push({
                  name: UserGHRep.name,
                  data: null
                })
                }
              }
            })

            Promise.all(arrayPromises).then(r => { // r = array de promesas (repos)
              r.forEach((obj, i) => { // por cada repo (obj = array de commits)
                commitsArray = []
                obj.data.forEach(commit => {
                  commitsArray.push({
                  author: commit.commit.author.name,
                  date: commit.commit.author.date,
                  message: commit.commit.message,
                  commitHash: commit.sha
                  })
                })
                privateRepos[i].data = commitsArray
              })
              res.json(privateRepos)
            })
        })
  },
};