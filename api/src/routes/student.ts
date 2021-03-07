import { Router } from "express";
const router = Router();
import { studentController } from "../controller/studentController";

router.get("/cohort/:cohortId", studentController.getStudentsByCohort);

router.put("/", studentController.putStudent);

export default router;
