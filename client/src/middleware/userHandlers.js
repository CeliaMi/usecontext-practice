import { login, register } from "../services/UserService";



export const handlerLoginUser = async ( loginuser ) =>{
    const res = await login(loginuser)
        return res  
}

export const handlerRegisterUser = async ( newUser ) =>{
    const res = await register(newUser)
    return res;
}

