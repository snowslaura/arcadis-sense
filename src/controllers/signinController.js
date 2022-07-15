import * as signInService from "./../services/signInService.js"

export async function signIn(req,res){
    const {email, password} = req.body;
    await signInService.logInUser(email,password)         
    res.sendStatus(200)
}