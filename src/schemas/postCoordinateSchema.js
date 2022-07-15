import joi from "joi";

const postCoordinateSchema = joi.object(
    {
        userId : joi.number().min(1).required(),
        name: joi.string().required(),
        xCoordinate:joi.number().integer().min(0).max(9).required(),
        yCoordinate:joi.number().integer().min(0).max(9).required()       
    }
)

export default postCoordinateSchema;