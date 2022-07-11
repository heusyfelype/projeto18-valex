import Joi from "joi";

const types = ['groceries', 'restaurants', 'transport', 'education', 'health']

export const createCardSchema = Joi.object({
    "employeeId" : Joi.number().integer().positive().required(),
    "number": Joi.string().required(),
    "type": Joi.string().valid(...types).required()
});

export const apiKeySchema = Joi.object({
    "x-api-key": Joi.string().required()
});