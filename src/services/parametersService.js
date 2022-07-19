import * as parametersRepository from "./../repositories/parametersRepository.js"

export async function postParameters(
    coordinateId,    
    aluminioDissolvido,
    arsenioTotal,
    chumboTotal,
    cobreDissolvido,
    escherichiaColi,
    cromoTotal,
    cadmioTotal,
    dbo){

        const irregular = verifyIrregular(
            aluminioDissolvido,
            arsenioTotal,
            chumboTotal,
            cobreDissolvido,
            escherichiaColi,
            cromoTotal,
            cadmioTotal,
            dbo)

        await parametersRepository.postParameters(
        coordinateId,    
        aluminioDissolvido,
        arsenioTotal,
        chumboTotal,
        cobreDissolvido,
        escherichiaColi,
        cromoTotal,
        cadmioTotal,
        dbo,
        irregular)  

}

function verifyIrregular(
    aluminioDissolvido,
    arsenioTotal,
    chumboTotal,
    cobreDissolvido,
    escherichiaColi,
    cromoTotal,
    cadmioTotal,
    dbo){
    const limits = {
    aluminioDissolvido:0.1,
    arsenioTotal:0.01,
    chumboTotal:0.01,
    cobreDissolvido:0.009,
    escherichiaColi:1000,
    cromoTotal:0.05,
    cadmioTotal:0.001,
    dbo:5
    }
    if(
        aluminioDissolvido>limits.aluminioDissolvido ||
        arsenioTotal>limits.arsenioTotal ||
        chumboTotal>limits.chumboTotal ||
        cobreDissolvido>limits.cobreDissolvido ||
        escherichiaColi>limits.escherichiaColi ||
        cromoTotal>limits.cromoTotal ||
        cadmioTotal>limits.cadmioTotal ||
        dbo>limits.dbo
    )return true
    else return false
}

export async function deleteParameteres(id,userId){
    await parametersRepository.deleteParameteres(id)
}

export async function getOneParameter(id,userId){
    const {rows:parameters} = await parametersRepository.getOneParameter(id,userId)
    console.log(parameters)
    return parameters
}

export async function getParameters(userId){
    const {rows:parameters} = await parametersRepository.getParameteres(userId)
    return parameters
}

export async function getParametersFromOneCoordinate(id,userId){
    const {rows:parameters} = await parametersRepository.getParametersFromOneCoordinate(id,userId)
    return parameters
}

// export async function getParametersFromOneCoordinate(id,userId){
//     const {rows:parameters} = await parametersRepository.getParametersFromOneCoordinate(id,userId)
//     return parameters
// }

export async function updateParameteres(
    id,
    coordinateId,    
    aluminioDissolvido,
    arsenioTotal,
    chumboTotal,
    cobreDissolvido,
    escherichiaColi,
    cromoTotal,
    cadmioTotal,
    dbo,
    irregular
){
    await parametersRepository.updateParameteres(
        id,
        coordinateId,    
        aluminioDissolvido,
        arsenioTotal,
        chumboTotal,
        cobreDissolvido,
        escherichiaColi,
        cromoTotal,
        cadmioTotal,
        dbo,
        irregular
    )
}