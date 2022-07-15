import * as irregularCoordinatesRepository from "./../repositories/irregularCoordinatesRepository.js"

export async function getIrregularCoordinate(userId,id){
    const {rows:coordinate} = await irregularCoordinatesRepository.getIrregularCoordinateByUserIdAndId(userId,id)
    return coordinate
}

export async function getIrregularCoordinates(userId) {
    const {rows:coordinates} = await irregularCoordinatesRepository.getIrregularCoordinatesByUserId(userId)
    return coordinates
}
