import { Router } from "express";
import userRouter from "./user";
import githubRouter from "./github";
import upload from "../middleware/upload";
import uploadController from "../controller/csvController";
import authRouter from "./auth";
import devRouter from "./dev";
import cohortRouter from "./cohort";
import studentRouter from "./student";

const router = Router();

router.use("/user", userRouter);
router.use("/github", githubRouter);
router.use("/auth", authRouter);
router.use("/student", studentRouter);
router.use("/cohort", cohortRouter);
// dev testing
router.use("/dev", devRouter);

router.post("/csv", upload.single("file"), uploadController);

export default router;
