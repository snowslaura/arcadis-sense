import { Router } from "express";
import { postParameters , deleteParameteres,getParameteres, updateParameteres, getOneParameter, getParametersFromOneCoordinate, getOneCoordinateParameterByName} from "./../controllers/parametersController.js"
import { postParameterValidator } from "../middleware/postParameterMiddleware.js";
import { tokenValidator } from "../middleware/tokenValidatorMiddleware.js";

const parameteres = Router()

parameteres.post('/parameters',tokenValidator, postParameterValidator, postParameters)
parameteres.delete('/parameters',tokenValidator, deleteParameteres)
parameteres.get('/parameters',tokenValidator, getParameteres)
parameteres.get('/parameters/:id',tokenValidator, getOneParameter)
parameteres.get('/parameters/coordinate/:id',tokenValidator, getParametersFromOneCoordinate)
parameteres.put('/parameters',tokenValidator,postParameterValidator, updateParameteres)
parameteres.get('/parameter',tokenValidator, getOneCoordinateParameterByName)


export default parameteres;