import db from "../../config/db.js";

export async function postParameters(
    coordinateId,    
    aluminioDissolvido,
    arsenioTotal,
    chumboTotal,
    cobreDissolvido,
    escherichiaColi,
    cromoTotal,
    cadmioTotal,
    dbo,
    irregular){
    return db.query(`
        INSERT INTO kpi
        ("coordinateId",    
        "aluminioDissolvido",
        "arsenioTotal",
        "chumboTotal",
        "cobreDissolvido",
        "escherichiaColi",
        "cromoTotal",
        "cadmioTotal",
        dbo,
        irregular)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
        [coordinateId,    
        aluminioDissolvido,
        arsenioTotal,
        chumboTotal,
        cobreDissolvido,
        escherichiaColi,
        cromoTotal,
        cadmioTotal,
        dbo,
        irregular]);
}