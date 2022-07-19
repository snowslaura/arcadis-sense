import * as paramatersService from "./../services/parametersService.js"

export async function postParameters(req,res){
    const { coordinateId,    
    aluminioDissolvido,
	arsenioTotal,
	chumboTotal,
	cobreDissolvido,
	escherichiaColi,
	cromoTotal,
	cadmioTotal,
	dbo} = req.body;
    await paramatersService.postParameters(
    coordinateId,    
    aluminioDissolvido,
    arsenioTotal,
    chumboTotal,
    cobreDissolvido,
    escherichiaColi,
    cromoTotal,
    cadmioTotal,
    dbo)       
    res.sendStatus(201)
}



export async function deleteParameteres(req,res){
    const {id} = req.params    
    await paramatersService.deleteParameteres(id)
    res.sendStatus(200)
}

export async function getParameteres(req,res){
    const {userId} = res.locals
    const parameters =  await paramatersService.getParameters(userId)
    res.status(200).send(parameters)
}

export async function getParametersFromOneCoordinate(req,res){
    const {id} = req.params
    const {userId} = res.locals
    const parameters =  await paramatersService.getParametersFromOneCoordinate(id,userId)
    res.status(200).send(parameters) 
}

export async function getOneParameter(req,res){
    const {id} = req.params
    const {userId} = res.locals
    const parameter =  await paramatersService.getOneParameter(id,userId)
    res.status(200).send(parameter)
}

export async function updateParameteres(req,res){
    const { id, coordinateId,    
        aluminioDissolvido,
        arsenioTotal,
        chumboTotal,
        cobreDissolvido,
        escherichiaColi,
        cromoTotal,
        cadmioTotal,
        dbo,
        irregular} = req.body;
    await paramatersService.updateParameteres(
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
        irregular)
    res.sendStatus(200)
}