import { Router } from "express";
import { postParameters , deleteParameteres,getParameteres, updateParameteres} from "./../controllers/parametersController.js"
import { postParameterValidator } from "../middleware/postParameterMiddleware.js";

const parameteres = Router()

parameteres.post('/parameters', postParameterValidator, postParameters)
parameteres.delete('/parameters', deleteParameteres)
parameteres.get('/parameters', getParameteres)
parameteres.put('/parameters',postParameterValidator, updateParameteres)


export default parameteres;