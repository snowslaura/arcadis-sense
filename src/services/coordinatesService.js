import * as coordinateRepository from "./../repositories/coordinateRepository.js"

export async function getCoordinatesByUser(userId){
    const {rows:coordinates} = await coordinateRepository.getCoordinatesByUserId(userId)
    return coordinates
}

export async function postCoordinate(userId, name, xCoordinate, yCoordinate){
    await coordinateRepository.postCoordinate(userId, name, xCoordinate, yCoordinate)    
}

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
        await coordinateRepository.postParameters(
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

export async function getCoordinate(userId,id){
    const {rows:coordinate} = await coordinateRepository.getCoordinateByUserIdAndId(userId,id)
    return coordinate
}

export async function getIrregularCoordinate(userId,id){
    const {rows:coordinate} = await coordinateRepository.getIrregularCoordinateByUserIdAndId(userId,id)
    return coordinate
}
