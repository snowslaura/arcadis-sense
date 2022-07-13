import * as signInService from "./../services/signUpService.js"

export async function signIn(req,res){
    const {email, password} = req.body;
    await signInService.logInUser(email,password)         
    res.send(201)
}