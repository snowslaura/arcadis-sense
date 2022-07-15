import db from "../../config/db.js";

export async function getIrregularCoordinateByUserIdAndId(userId,id){
    return db.query(`
        SELECT coordinates.*, kpi.*
        FROM coordinates
        JOIN kpi
        ON coordinates.id = kpi."coordinateId"
        WHERE coordinates."userId"=$1 AND coordinates.id=$2 AND kpi.irregular = true`,
        [userId,id]);
}

export async function getIrregularCoordinatesByUserId(userId){
    return db.query(`
        SELECT coordinates.*, kpi.*
        FROM coordinates
        JOIN kpi
        ON coordinates.id = kpi."coordinateId"
        WHERE coordinates."userId"=$1 AND kpi.irregular = true`,
        [userId]);
}

