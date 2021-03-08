import { Router } from "express";
const router = Router();
import { cohortController } from "../controller/cohortController";

router.get("/", cohortController.getCohorts);

export default router;
