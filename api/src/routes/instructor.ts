import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { instructorController } from "../controller/instructorController";

router.get("/search", instructorController.searchInstructorByName);
router.get("/:id", instructorController.getInstructor);
router.put("/:id", instructorController.putInstructor);

export default router;
