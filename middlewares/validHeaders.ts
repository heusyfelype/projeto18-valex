import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export default function validHeaders(schema: Schema){

    function validHeadersSchema(req: Request, res:Response, next:NextFunction){

        const XApiKey = {"x-api-key": req.headers['x-api-key']}
        const {error} = schema.validate(XApiKey, {abortEarly:false});
        if(error){
            throw {type:"Bad Request", message: "Joi Restriction on Headers", error: error.details.map(detail => detail.message) }
        }

        next()
    }
    return validHeadersSchema
}

