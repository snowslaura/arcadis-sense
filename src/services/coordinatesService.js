import * as coordinateRepository from "./../repositories/coordinateRepository.js"

export async function getCoordinatesByUser(userId){
    const {rows:coordinates} = await coordinateRepository.getCoordinatesByUserId(userId)
    return coordinates
}
export async function postCoordinate(userId, name, xCoordinate, yCoordinate){
    await verifyCoordinates(userId, name, xCoordinate, yCoordinate)
    await coordinateRepository.postCoordinate(userId, name, xCoordinate, yCoordinate)    
}

export async function deleteCoordinate(coordId,userId) {
    await coordinateRepository.deleteCoordinate(coordId,userId)    
}

export async function getCoordinate(userId,id){
    const {rows:coordinate} = await coordinateRepository.getCoordinateByUserIdAndId(userId,id)
    return coordinate
}


async function verifyCoordinates(userId, name, xCoordinate, yCoordinate){
  const coordinate = await coordinateRepository.getCoordinateByCoordintesAndUser(userId, name, xCoordinate, yCoordinate)
  if(coordinate)throw{
    type:"conflict",
    message:"Já existe uma coordenada com esses dados"
  }
}