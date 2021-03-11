import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { instructorController } from "../controller/instructorController";

router.get("/search", instructorController.searchInstructorByName);

export default router;
