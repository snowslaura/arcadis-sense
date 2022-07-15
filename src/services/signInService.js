import {getUserByEmail} from "./../repositories/signUpRepository.js"
import bcrypt from "bcrypt"

export async function logInUser(email,password){
    const user = await verifyEmail(email)
    await decryptPassword(password,user)
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
