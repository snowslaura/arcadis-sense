import {getUserByEmail} from "./../repositories/signUpRepository.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function logInUser(email,password){
    const user = await verifyEmail(email)
    await decryptPassword(password,user)
    const token = await createToken(email)
    return token
}

async function verifyEmail(email){
    const {rows} = await getUserByEmail(email)
    if(rows.length===0)throw{
        type:"unauthorized",
        message:"Email e/ou senha incorretas"
    }
    return rows[0]
}


async function decryptPassword(password,user){    
    const match =  await bcrypt.compare(password,user.password)
    if(!match)throw{
        type:"unauthorized",
        message:"Email e/ou senha incorretas"  
    }
}

async function createToken(email){
    const {rows:result} = await getUserByEmail(email)  
    const config = { expiresIn: process.env.JWT_EXPIRES_IN};
    const token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, config);
    return token
}
