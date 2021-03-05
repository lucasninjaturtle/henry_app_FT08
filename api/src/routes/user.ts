import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import users from "../controller/userController";

// Rutas
// router.get("/", users.getUsers)

router.get("/:id", users.getUser);
router.post("/admin", users.createAdmin);

export default router;
