import { Router } from 'express'
const router = Router()

// Importo los controllers de cada ruta
import github from "../controller/githubController"

// Rutas
router.get("/", github.getgithub)


export default router;