import { NextFunction, Request, Response } from "express";

export function handleErrors(error:Error, req:Request, res:Response, next:NextFunction){
    return res.send("handleError")
}