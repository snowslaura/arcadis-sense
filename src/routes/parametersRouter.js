import { postParameters} from "./../controllers/parametersController.js"
import { postParameterValidator } from "../middleware/postParameterMiddleware.js";


coordinates.post('/coordinate/parameters', postParameterValidator, postParameters)
//alterar parametros
//pegar parametros