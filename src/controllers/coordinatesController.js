import * as coordinatesService from "./../services/coordinatesService.js"

export async function getCoordinates(req,res){
    const {userId} = req.body;
    const coordinates = await coordinatesService.getCoordinatesByUser(userId) 
    res.status(200).send(coordinates)
}

export async function postCoordinate(req,res){
    const {userId, name, xCoordinate, yCoordinate} = req.body;
    await coordinatesService.postCoordinate(userId, name, xCoordinate, yCoordinate)       
    res.sendStatus(201)
}

export async function deleteCoordinate(req,res){
    const {id} = req.params
    const{userId} = req.body
    await coordinatesService.deleteCoordinate(coordId)       
    res.sendStatus(200)
}


export async function getOneCoordinate(req,res){
    const {id} = req.params
    const {userId} = req.body;
    const coordinate = await coordinatesService.getCoordinate(userId,id) 
    res.status(200).send(coordinate)   
}

