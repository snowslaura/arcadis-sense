import * as signInService from "./../services/signInService.js"

export async function signIn(req,res){
    const {email, password} = req.body;
    const token = await signInService.logInUser(email,password) 
    res.status(200).send(token)
}

