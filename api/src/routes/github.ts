import { Router } from 'express'
const router = Router()

// Importo los controllers de cada ruta
import github from "../controller/githubController"


router.get("/", github.getgithub)


export default router;