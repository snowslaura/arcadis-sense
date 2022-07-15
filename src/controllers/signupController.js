import * as signUpService from "./../services/signUpService.js"

export async function signUp(req,res){
    const {userName, email, password} = res.locals.body;    
    await signUpService.createUser(userName,email,password)         
    res.sendStatus(201)
}