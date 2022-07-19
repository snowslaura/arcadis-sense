import joi from "joi";

const signUpSchema = joi.object(
    {
        userName: joi.string().min(3).required(),        
        email: joi.string().email().required(),
        password: joi.string().required(),
        confirmation: joi.ref('password'),
    }
)

export default signUpSchema;