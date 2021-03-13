import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { moduleController } from "../controller/moduleController";

router.get("/search", moduleController.searchModuleByName);

export default router;
