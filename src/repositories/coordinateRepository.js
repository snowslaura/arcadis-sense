

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

export async function deleteCoordinate(coordId){
    return db.query(`
        DELETE  FROM coordinates
        WHERE id=$1`,
        [coordId]);
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
