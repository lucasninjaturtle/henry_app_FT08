import { Router } from "express";
import userRouter from "./user";
import githubRouter from "./github";
import upload from "../middleware/upload";
import uploadController from "../controller/csvController";
import authRouter from "./auth";
import devRouter from "./dev";
import cohortRouter from "./cohort";
import groupRouter from "./group";
import instructorRouter from "./instructor";
import studentRouter from "./student";
import moduleRouter from "./module";
import eventRouter from "./event";
import projectManagerRouter from "./projectManager";

const router = Router();

router.use("/user", userRouter);
router.use("/github", githubRouter);
router.use("/auth", authRouter);
router.use("/cohort", cohortRouter);
router.use("/group", groupRouter);
router.use("/student", studentRouter);
router.use("/instructor", instructorRouter);
router.use("/module", moduleRouter);
router.use("/projectManager", projectManagerRouter);
router.use("/event", eventRouter);

// dev testing
router.use("/dev", devRouter);

router.post("/csv", upload.single("file"), uploadController);

export default router;
