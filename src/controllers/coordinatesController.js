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

export async function postParameters(req,res){
    const { coordinateId,    
    aluminioDissolvido,
	arsenioTotal,
	chumboTotal,
	cobreDissolvido,
	escherichiaColi,
	cromoTotal,
	cadmioTotal,
	dbo,
	irregular} = req.body;
    await coordinatesService.postParameters(
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
    res.sendStatus(201)
}

export async function getOneCoordinate(req,res){
    const {id} = req.params
    const {userId} = req.body;
    const coordinate = await coordinatesService.getCoordinate(userId,id) 
    res.status(200).send(coordinate)   
}

export async function getOneIrregularCoordinate(req,res){
    const {id} = req.params
    const {userId} = req.body;
    const coordinate = await coordinatesService.getIrregularCoordinate(userId,id) 
    res.status(200).send(coordinate)   
}