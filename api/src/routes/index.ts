import { Router } from "express";
import userRouter from "./user";
import githubRouter from "./github";
import upload from "../middleware/upload";
import uploadController from "../controller/csvController";
import authRouter from "./auth";

const router = Router();

router.use("/user", userRouter);
router.use("/github", githubRouter);
router.use("/auth", authRouter);

router.post("/csv", upload.single("file"), uploadController);

export default router;
