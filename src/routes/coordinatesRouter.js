import {Router} from "express"
import {deleteCoordinate, getCoordinates,getOneCoordinate, getOneCoordinateByNameOrCoordinate,  postCoordinate} from "./../controllers/coordinatesController.js"
import {postCoordinateValidator} from "./../middleware/postCoordinateMiddleware.js"
import {tokenValidator} from "./../middleware/tokenValidatorMiddleware.js"

const coordinates = Router();
coordinates.post('/coordinates',tokenValidator,postCoordinateValidator, postCoordinate)
coordinates.get('/coordinates',tokenValidator, getCoordinates )
coordinates.delete('/coordinates/:id',tokenValidator, deleteCoordinate)
coordinates.get('/coordinates/:id', tokenValidator, getOneCoordinate)
coordinates.get('/coordinate', tokenValidator, getOneCoordinateByNameOrCoordinate)

export default coordinates;