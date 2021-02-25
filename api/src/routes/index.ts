import {Router} from 'express'
const router = Router()

// Importo los controllers de cada ruta
import {getUsers} from "../controller/indexController"

// Rutas
router.get("/users", getUsers)

export default router;