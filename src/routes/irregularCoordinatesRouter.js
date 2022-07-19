import { Router } from "express";
import { getIrregularCoordinates, getOneIrregularCoordinate} from "./../controllers/irregularCoordinatesController.js"
import { tokenValidator } from "../middleware/tokenValidatorMiddleware.js";


const irregular = Router()

irregular.get('/irregular', tokenValidator, getIrregularCoordinates)
irregular.get('/irregular/:id', tokenValidator, getOneIrregularCoordinate)

export default irregular;