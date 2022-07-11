import { Router } from "express";

import testRouter from "./teste.js";
import cardsRouter from "./cardsRouter.js";

const router = Router();

router.use(testRouter);
router.use(cardsRouter);

export default router;


