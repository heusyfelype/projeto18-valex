import { Request, Response } from "express";

import testService from "../services/testService.js";

async function testController(req: Request, res: Response){

    const test = await testService()
    res.send(test)
}

export default testController