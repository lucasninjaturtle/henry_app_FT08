import { Router } from 'express'
import userRouter from './user'
import githubRouter from './github'
import authRouter from './auth'

const router = Router()

router.use("/user", userRouter)
router.use("/github", githubRouter)
router.use("/auth", authRouter)

export default router
