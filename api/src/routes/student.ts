import { Router } from "express";
const router = Router();

// Importo los controllers de cada ruta
import { studentController } from "../controller/studentController";

router.get("/search", studentController.searchStudentByName);
router.get("/", studentController.getStudent);

export default router;
