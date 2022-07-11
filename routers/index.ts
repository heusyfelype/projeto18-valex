import { Router } from "express";

import testRouter from "./teste.js";

const router = Router();

router.use(testRouter);

export default router;


