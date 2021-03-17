import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { projectManagerController } from "../controller/projectManager";

router.get("/", projectManagerController.getAllPms);
router.get("/search", projectManagerController.searchPmByName);
router.post("/bulk", projectManagerController.bulkCreate);

export default router;
