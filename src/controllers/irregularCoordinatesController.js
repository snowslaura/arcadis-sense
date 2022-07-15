import * as irregularCoordinatesService from "./../services/irregularCoordinatesService.js"

export async function getIrregularCoordinates(req,res){
    const {userId} = req.body;
    const coordinates = await irregularCoordinatesService.getIrregularCoordinates(userId) 
    res.status(200).send(coordinates)   
}

export async function getOneIrregularCoordinate(req,res){
    const {id} = req.params
    const {userId} = req.body;
    const coordinate = await irregularCoordinatesService.getIrregularCoordinate(userId,id) 
    res.status(200).send(coordinate)   
}
