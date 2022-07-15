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
	dbo,
	irregular} = req.body;
    await paramatersService.postParameters(
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