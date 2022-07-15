import {Router} from "express"
import {deleteCoordinate, getCoordinates,getOneCoordinate,  postCoordinate} from "./../controllers/coordinatesController.js"
import {postCoordinateValidator} from "./../middleware/postCoordinateMiddleware.js"

const coordinates = Router();
coordinates.post('/coordinates',postCoordinateValidator, postCoordinate)
coordinates.get('/coordinates', getCoordinates )
coordinates.delete('/coordinates/:id', deleteCoordinate)
coordinates.get('/coordinates/:id', getOneCoordinate)

export default coordinates;