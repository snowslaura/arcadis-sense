import * as coordinateRepository from "./../repositories/coordinateRepository.js"

export async function getCoordinatesByUser(userId){
    const {rows:coordinates} = await coordinateRepository.getCoordinatesByUserId(userId)
    return coordinates
}
export async function postCoordinate(userId, name, xCoordinate, yCoordinate){
    
    await verifyCoordinates(userId, name, xCoordinate, yCoordinate)
    console.log("bateu no service")
    await coordinateRepository.postCoordinate(userId, name, xCoordinate, yCoordinate)    
}

export async function deleteCoordinate(coordId,userId) {
    await coordinateRepository.deleteCoordinate(coordId,userId)    
}

export async function getCoordinate(userId,id){
    const {rows:coordinate} = await coordinateRepository.getCoordinateByUserIdAndId(userId,id)
    return coordinate
}


export async function getCoordinateByName(userId,name) {
  const {rows:coordinate} = await coordinateRepository.getCoordinateByUserIdAndName(userId,name)
  if(coordinate.length===0)throw{
    type:"not_found",
    message:"Coordenada inexistente"
  }
  return coordinate
}

export async function getCoordinateByCoordinate(userId,x,y) {
  const {rows:coordinate} = await coordinateRepository.getCoordinateByUserIdAndCoordinate(userId,x,y)
  if(coordinate.length===0)throw{
    type:"not_found",
    message:"Coordenada inexistente"
  }
  return coordinate
}



async function verifyCoordinates(userId, name, xCoordinate, yCoordinate){
  const {rows:coordinate} = await coordinateRepository.getCoordinateByCoordintesAndUser(userId, name, xCoordinate, yCoordinate)
  if(coordinate.length>0)throw{
    type:"conflict",
    message:"Já existe uma coordenada com esses dados"
  }
}