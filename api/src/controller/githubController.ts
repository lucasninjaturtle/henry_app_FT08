import { Request, Response } from "express";
import { QueryResult } from "pg";
import axios from "axios";

export const githubController = {
  async getUserGHRepo(req: Request, res: Response) {
    axios.get("https://api.github.com/user/repos", {
      headers: {
        "Authorization": `Bearer 9bf31ce262244fece1b4b5633c841f56c367abf8`
        }
      })
        .then((getUserAllGHRepos) => {
          var privateRepos = []
          getUserAllGHRepos.data.map((UserGHRep) => {
            if(UserGHRep.fork == true) {
              if(UserGHRep.name == "Curso.Prep.Henry" ||UserGHRep.name == "FT-M1" || UserGHRep.name == "FT-M2" || UserGHRep.name == "FT-M3" || UserGHRep.name == "FT-M4" || UserGHRep.name.slice(0, 12) == "ecommerce-ft") {
                /* privateRepos.push(UserGHRep.name) */
                axios.get(`https://api.github.com/repos/${UserGHRep.owner.login}/${UserGHRep.name}/commits`, {
                headers: {
                  "Authorization": `Bearer 9bf31ce262244fece1b4b5633c841f56c367abf8`
                  }
                })
                  .then((getCommits) => {
                    let commitsArray = []
                    getCommits.data.map((commit) => {
                      commitsArray.push({
                        author: commit.commit.author.name,
                        date: commit.commit.author.date,
                        message: commit.commit.message,
                        commitHash: commit.sha                      })
                    })
                    let infoFiltrada = {
                      name: UserGHRep.name,
                      data: commitsArray
                    }
                    console.log(infoFiltrada)
                  })
                  .catch((err) => {
                    console.log("El error es: " + err)
                  })
              }
            }
          })
        })
  },
};

/* commit.author.name
  commit.author.date
  commit.message */