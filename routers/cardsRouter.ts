import { Router } from "express";

import validHeaders from "../middlewares/validHeaders.js";
import validBody from "../middlewares/validBody.js";
import * as allSchemas from "../schemas/allSchemas.js";


const cardsRouter = Router();

cardsRouter.post("/create-card", validHeaders(allSchemas.apiKeySchema),validBody(allSchemas.createCardSchema))


export default cardsRouter