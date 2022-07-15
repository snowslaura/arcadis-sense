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
    dbo,
    irregular){
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

export async function deleteParameteres(id){
    await parametersRepository.deleteParameteres(id)
}

export async function getParameteres(id){
    await parametersRepository.getParameteres(id)
}

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