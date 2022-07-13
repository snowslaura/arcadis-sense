import {Router} from "express"
import {signInDataVerification} from "./../middleware/signInDataValidator.js"
import {signInDataVerification} from "./../middleware/signInDataValidator.js"
import {signUp} from "./../controllers/signupController.js"
import {signIn} from "./../controllers/signinController.js"

const authRouter = Router();

authRouter.post('/signup',signInDataVerification, signUp )
authRouter.post('/signin', signInDataVerification, signIn )

