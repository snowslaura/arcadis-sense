import signUpSchema from "../schemas/authSchema.js";

export async function validateSignUp(req, res, next) {    
    
    const { error } = signUpSchema.validate(req.body, { abortEarly: false });
    
    if (error) {
        return res.status(400).send(error.details.map((error) => error.message));
    } 
    
    res.locals.body = req.body

    next();
}