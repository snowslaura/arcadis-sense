import {Router} from "express"
import {getCoordinates, getOneCoordinate, getOneIrregularCoordinate, postCoordinate, postParameters} from "./../controllers/coordinatesController.js"

const coordinates = Router();

coordinates.get('/coordinates', getCoordinates )
coordinates.post('/coordinates',  postCoordinate )
coordinates.post('/coordinate/parameters', postParameters)
coordinates.get('/coordinates/:id', getOneCoordinate)
coordinates.get('/coordinates/:id/irregular', getOneIrregularCoordinate)

export default coordinates;