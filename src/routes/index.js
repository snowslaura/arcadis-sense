import { Router } from "express";
import authRouter from "./authRouter.js"
import coordinates from "./coordinatesRouter.js";
import irregular from "./irregularCoordinatesRouter.js";

const router = Router()
router.use(authRouter)
router.use(coordinates)
router.use(irregular)


export default router;