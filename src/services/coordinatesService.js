import * as coordinateRepository from "./../repositories/coordinateRepository.js"

export async function getCoordinatesByUser(userId){
    const {rows:coordinates} = await coordinateRepository.getCoordinatesByUserId(userId)
    return coordinates
}

export async function postCoordinate(userId, name, xCoordinate, yCoordinate){
    await coordinateRepository.postCoordinate(userId, name, xCoordinate, yCoordinate)    
}

export async function deleteCoordinate(coordId,userId) {
    await coordinateRepository.deleteCoordinate(coordId,userId)    
}

export async function getCoordinate(userId,id){
    const {rows:coordinate} = await coordinateRepository.getCoordinateByUserIdAndId(userId,id)
    return coordinate
}


