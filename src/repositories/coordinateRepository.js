import db from "../../config/db.js";

export async function getCoordinatesByUserId(userId) {
    return db.query(`
        SELECT * FROM coordinates
        WHERE coordinates."userId"=$1`,
        [userId]);
}

export async function getCoordinatesAndParametersByUserId(userId) {
    return db.query(`
        SELECT coordinates.*,kpi.*
        FROM kpi
        JOIN coordinates
        ON kpi."coordinateId" = coordinates.id
        WHERE coordinates."userId"=$1`,
        [userId]);
}


export async function getCoordinateByCoordintesAndUser(userId, name, xCoordinate, yCoordinate){
    return db.query(`
        SELECT * FROM coordinates
        WHERE "userId"=$1 AND name=$2 AND "xCoordinate"=$3 AND "yCoordinate"=$4`,
        [userId,name,xCoordinate,xCoordinate,yCoordinate]);
}

export async function postCoordinate(userId, name, xCoordinate, yCoordinate){
    return db.query(`
        INSERT INTO coordinates
        ("userId", name, "xCoordinate", "yCoordinate")
        VALUES ($1,$2,$3,$4)`,
        [userId, name, xCoordinate, yCoordinate]);
}

export async function deleteCoordinate(coordId,userId){
    return db.query(`
        DELETE  FROM coordinates
        WHERE id=$1 AND userId=$2`,
        [coordId,userId]);
}

export async function getCoordinateByUserIdAndId(userId,id){
    return db.query(`
        SELECT FROM coordinates       
        WHERE "userId"=$1 AND id=$2`,
        [userId,id]);
}
