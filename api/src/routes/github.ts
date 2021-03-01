import { Router } from "express";
const router = Router();
import githubOctokitInstance from "../githubConfig";

// Importo los controllers de cada ruta
import github from "../controller/githubController";

// Rutas
router.get("/", github.getgithub);

router.get("/test", async (req, res, next) => {
  const { data: pullRequest } = await githubOctokitInstance.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123
  });
  console.log(pullRequest);
  res.sendStatus(200);
});

export default router;
