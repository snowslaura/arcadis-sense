import db from "../../config/db.js";

export async function getCoordinatesByUserId(userId) {
    return db.query(`
        SELECT * FROM coordinates
        WHERE "userId" = $1`,
        [userId]);
}

export async function postCoordinate(userId, name, xCoordinate, yCoordinate){
    return db.query(`
        INSERT INTO coordinates
        ("userId", name, "xCoordinate", "yCoordinate")
        VALUES ($1,$2,$3,$4)`,
        [userId, name, xCoordinate, yCoordinate]);
}

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

export async function getCoordinateByUserIdAndId(userId,id){
    return db.query(`
        SELECT coordinates.*, kpi.*
        FROM coordinates
        JOIN kpi
        ON coordinates.id = kpi."coordinateId"
        WHERE coordinates."userId"=$1 AND coordinates.id=$2`,
        [userId,id]);
}

export async function getIrregularCoordinateByUserIdAndId(userId,id){
    return db.query(`
        SELECT coordinates.*, kpi.*
        FROM coordinates
        JOIN kpi
        ON coordinates.id = kpi."coordinateId"
        WHERE coordinates."userId"=$1 AND coordinates.id=$2 AND kpi.irregular = true`,
        [userId,id]);
}