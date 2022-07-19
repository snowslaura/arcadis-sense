import * as coordinatesService from "./../services/coordinatesService.js"

export async function getCoordinates(req,res){
    const {userId} = res.locals;
    const coordinates = await coordinatesService.getCoordinatesByUser(userId) 
    res.status(200).send(coordinates)
}

export async function postCoordinate(req,res){
    const { name, xCoordinate, yCoordinate} = req.body;
    const {userId}  = res.locals
    await coordinatesService.postCoordinate(userId, name, xCoordinate, yCoordinate)       
    res.sendStatus(201)
}

export async function deleteCoordinate(req,res){
    const {id} = req.params
    const{userId} = res.locals
    await coordinatesService.deleteCoordinate(id, userId)       
    res.sendStatus(200)
}


export async function getOneCoordinate(req,res){
    const {id} = req.params
    const {userId} = res.locals;
    const coordinate = await coordinatesService.getCoordinate(userId,id) 
    res.status(200).send(coordinate)   
}

