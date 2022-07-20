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

export async function getOneParameter(id, userId){
    return db.query(`
    SELECT coordinates.*,kpi.*
    FROM kpi
    JOIN coordinates
    ON kpi."coordinateId" = coordinates.id
    WHERE coordinates."userId"=$1 AND kpi.id=$2
    `,[userId,id]) 
}

export async function getParameteres(userId){
    return db.query(`
    SELECT coordinates.*,kpi.*
    FROM kpi
    JOIN coordinates
    ON kpi."coordinateId" = coordinates.id
    WHERE coordinates."userId"=$1
    `,[userId]) 
}

export async function getParametersFromOneCoordinate(id,userId){
    return db.query(`
    SELECT coordinates.id,coordinates.name,coordinates."userId", coordinates."xCoordinate", coordinates."yCoordinate",kpi.*
    FROM kpi
    JOIN coordinates
    ON kpi."coordinateId" = coordinates.id
    WHERE coordinates."userId"=$1 AND kpi."coordinateId"=$2
    `,[userId,id]) 
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

export async function getOneCoordinateParameterByName(userId, parameter, name){
    return db.query(`
    SELECT coordinates.id,coordinates.name,coordinates."userId", coordinates."xCoordinate", coordinates."yCoordinate", AVG(kpi."${parameter}")
    FROM kpi
    JOIN coordinates
    ON kpi."coordinateId" = coordinates.id
    WHERE coordinates."userId"=$1 AND coordinates.name=$2
    GROUP BY coordinates.id
    `,[userId, name]) 
}