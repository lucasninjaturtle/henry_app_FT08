import {Router} from 'express'
import userRouter from './user'
import githubRouter from './github'
const router = Router()

router.use("/user", userRouter)
router.use("/github", githubRouter)

export default router