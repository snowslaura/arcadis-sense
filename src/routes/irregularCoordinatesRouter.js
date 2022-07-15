import { Router } from "express";
import { getIrregularCoordinates, getOneIrregularCoordinate} from "./../controllers/irregularCoordinatesController.js"


const irregular = Router()

irregular.get('/irregular', getIrregularCoordinates)
irregular.get('/irregular/:id', getOneIrregularCoordinate)

export default irregular;