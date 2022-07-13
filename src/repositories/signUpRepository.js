import db from "../../config/db.js";

export async function insertNewUser(email, password, userName) {
    return db.query(`
        INSERT INTO users (email, password, "userName")
        VALUES ($1, $2, $3)`,
        [email, password, userName]);
}

export async function getUserByEmail(email) {
    return db.query(`
        SELECT * FROM users
        WHERE email = $1`,
        [email]);
}

export async function getUserByName(name) {
    return db.query(`
        SELECT * FROM users
        WHERE "userName" = $1`,
        [name]);
}


