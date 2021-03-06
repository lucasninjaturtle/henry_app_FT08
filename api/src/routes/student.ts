import { Router } from "express";
const router = Router();
import { studentController } from "../controller/studentController";

router.get("/cohort/:cohortId", studentController.getStudentsByCohort);

export default router;
