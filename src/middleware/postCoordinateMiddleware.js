import postCoordinateSchema from "../schemas/postCoordinateSchema.js";

export async function postCoordinateValidator(req, res, next) { 
    
    const { error } = postCoordinateSchema.validate(req.body, { abortEarly: false });
    
    if (error) {
        return res.status(400).send(error.details.map((error) => error.message));
    } 
    
    next();
}