import { Router } from "express";
import authRouter from "./authRouter.js"
import coordinates from "./coordinatesRouter.js";

const router = Router()
router.use(authRouter)
router.use(coordinates)

export default router;