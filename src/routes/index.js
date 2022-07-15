import { Router } from "express";
import authRouter from "./authRouter.js"
import coordinates from "./coordinatesRouter.js";
import irregular from "./irregularCoordinatesRouter.js";
import parameteres from "./parametersRouter.js";

const router = Router()
router.use(authRouter)
router.use(coordinates)
router.use(irregular)
router.use(parameteres)


export default router;