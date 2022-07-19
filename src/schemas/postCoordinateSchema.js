import joi from "joi";

const postCoordinateSchema = joi.object(
    {
        name: joi.string().required(),
        xCoordinate:joi.number().integer().min(0).max(9).required(),
        yCoordinate:joi.number().integer().min(0).max(9).required()       
    }
)

export default postCoordinateSchema;