import db from "../../config/db.js";

export async function getIrregularCoordinatesByUserId(userId){
    return db.query(`
        SELECT DISTINCT coordinates.id,coordinates.name, coordinates."userId", coordinates."xCoordinate", coordinates."yCoordinate",kpi.irregular
        FROM kpi
        JOIN coordinates
        ON kpi."coordinateId" = coordinates.id
        WHERE coordinates."userId"=$1 AND  irregular=$2`,
        [userId,true]);
}
export async function getIrregularCoordinateByUserIdAndId(userId,id){
    return db.query(`
        SELECT coordinates.id,coordinates.name, coordinates."userId", coordinates."xCoordinate", coordinates."yCoordinate",kpi.*
        FROM kpi
        JOIN coordinates
        ON kpi."coordinateId" = coordinates.id
        WHERE coordinates."userId"=$1 AND kpi."coordinateId"=$2 AND kpi.irregular=$3`,
        [userId,id,true]);
}


