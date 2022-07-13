import {getUserByEmail, getUserByName, insertNewUser} from "./../repositories/signUpRepository.js"
import bcrypt from "bcrypt"

export async function createUser(userName,email,password){
    await verifyUserName(userName)
    await verifyEmail(email)
    const encryptedPassword = await encryptPassword(password)
    await insertNewUser(userName,email,encryptedPassword)    
}

async function verifyUserName(userName){
    const {rows} = await getUserByName(userName)
    if(rows.length>0)throw{
        type:"conflict",
        message:"Usuário já existe"
    }
}

async function verifyEmail(email){
    const {rows} = await getUserByEmail(email)
    if(rows.length>0)throw{
        type:"conflict",
        message:"Usuário já existe"
    }
}

async function encryptPassword(password){
    const hashPassword = await(bcrypt.hash(password,parseInt(process.env.SALT)))
    return hashPassword
}

