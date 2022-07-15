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

export async function deleteParameteres(id){
    return db.query(`
    DELETE FROM kpi
    WHERE id=$1
    `,[id])
}

export async function getParameteres(id){
    return db.query(`
    SELECT FROM kpi
    WHERE id=$1
    `,[id]) 
}

export async function updateParameteres(
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
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        WHERE id=$11`,
        [coordinateId,    
        aluminioDissolvido,
        arsenioTotal,
        chumboTotal,
        cobreDissolvido,
        escherichiaColi,
        cromoTotal,
        cadmioTotal,
        dbo,
        irregular, id]) 
}