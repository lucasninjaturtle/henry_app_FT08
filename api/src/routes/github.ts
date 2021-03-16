import axios from 'axios'
import { Router } from 'express'
const router = Router()
const passport = require("passport")

// Importo los controllers de cada ruta
import { githubController } from "../controller/githubController"

// Rutas
router.post("/getRepos", githubController.getUserGHRepo);
export default router;