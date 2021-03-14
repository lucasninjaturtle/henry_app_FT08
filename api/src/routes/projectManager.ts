import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { projectManagerController } from "../controller/projectManager";

router.get("/search", projectManagerController.searchPmByName);

export default router;
