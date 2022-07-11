import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";


export default function validBody(schema: Schema){

    function validateSchema(req: Request, res:Response, next:NextFunction){
        const {error} = schema.validate(req.body, {abortEarly:false});
        if(error){
            throw {type:"Bad Request", message: "Joi Restriction", error: error.details.map(detail => detail.message) }
        }

        next()
    }
    return validateSchema
}

