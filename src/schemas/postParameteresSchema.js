import joi from "joi";

const postParametersSchema = joi.object(
    {
        coordinateId:joi.number().integer().required(),    
        aluminioDissolvido:joi.number().precision(3).required(),
        arsenioTotal:joi.number().precision(4).required(),
        chumboTotal:joi.number().precision(4).required(),
        cobreDissolvido:joi.number().precision(4).required(),
        escherichiaColi:joi.number().integer().required(),
        cromoTotal:joi.number().precision(3).required(),
        cadmioTotal:joi.number().precision(4).required(),
        dbo:joi.number().integer().required(),
        // irregular:joi.boolean().required()    
    }
)

export default postParametersSchema;