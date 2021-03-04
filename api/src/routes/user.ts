import {Router} from 'express'
const router = Router()

// Importo los controllers de cada ruta
import users from "../controller/userController"

// Rutas
router.get("/:id", users.getUser)

export default router;