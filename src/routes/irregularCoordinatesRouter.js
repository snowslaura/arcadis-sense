import { Router } from "express";
import { getIrregularCoordinates, getOneIrregularCoordinate} from "./../controllers/irregularCoordinatesController.js"
import coordinates from "./coordinatesRouter.js";

const irregular = Router()

coordinates.get('/irregular', getIrregularCoordinates)
coordinates.get('/irregular/:id', getOneIrregularCoordinate)

export default irregular;