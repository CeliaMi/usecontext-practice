import { handleHttpError } from '../utils/handleError'
import { verifyToken } from '../utils/handlejwt'
import   UserModel  from '../models/UserModel'
import { Request, Response, NextFunction } from "express";

export const authMiddleware = async(req: Request, res : Response, next: NextFunction) => {
    try{
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401);
            return
        } 
        const token = req.headers.authorization.split(' ').pop();
        const dataToken :any  = await verifyToken(token);
        const userId  = <number>dataToken.id
        if(!userId){
            handleHttpError(res, "ERROR_ID_TOKEN", 401);
        }

        const user = await  UserModel.findByPk(dataToken.id)
        req.body.user = user
        next()

    }catch(error){
        handleHttpError(res, "NOT_SESSION", 401)
    }
}