import postParametersSchema from "../schemas/postParameteresSchema.js";

export async function postParameterValidator(req, res, next) { 
    
    const { error } = postParametersSchema.validate(req.body, { abortEarly: false });
    
    if (error) {
        return res.status(400).send(error.details.map((error) => error.message));
    } 
    
    next();
}