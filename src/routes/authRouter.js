import {Router} from "express"
import {signUpDataVerification} from "./../middleware/signUpDataValidator.js"
import {signInDataVerification} from "./../middleware/signInDataValidator.js"
import {signUp} from "./../controllers/signupController.js"
import {signIn} from "./../controllers/signinController.js"

const authRouter = Router();

authRouter.post('/signup', signUpDataVerification, signUp )
authRouter.post('/signin', signInDataVerification, signIn )

export default authRouter;

